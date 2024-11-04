import { Injectable } from '@nestjs/common';

import {
  CreateArticleService,
  DeleteArticleByIdService,
  GetArticlesService,
  UpdateArticleService,
} from './Articles.service.interface';
import { BadRequestException } from '@test-project/exceptions';
import { MessageError } from 'src/core/errors/errors-message';
import { ArticleDomain } from '../domain';
import { InjectRedis } from '@nestjs-modules/ioredis';
import { Redis } from 'ioredis';

@Injectable()
export class ArticleService {
  constructor(
    private readonly articleDomain: ArticleDomain,
    @InjectRedis() private readonly redis: Redis,
  ) {}

  public async getArticles(articleParameters: GetArticlesService) {
    const articleHash = await this.redis.get(`article:${articleParameters}`);
    if (articleHash) {
      return JSON.parse(articleHash);
    }
    const article = await this.articleDomain.getArticles(articleParameters);
    if (!article) {
      throw new BadRequestException(MessageError.DontCreateArticle);
    }
    await this.redis.set(`article:${articleParameters}`, JSON.stringify(article));
    return {
      article,
    };
  }

  public async createArticle(ArticleParameters: CreateArticleService) {
    const article = await this.articleDomain.createArticle(ArticleParameters);
    if (!article) {
      throw new BadRequestException(MessageError.DontCreateArticle);
    }
    return {
      article,
    };
  }

  public async deleteArticle({ articleId }: DeleteArticleByIdService) {
    const resultDeleteArticle = this.articleDomain.deleteArticle(articleId);
    if (!resultDeleteArticle) {
      throw new BadRequestException(MessageError.DeleteArticle);
    }
    await this.redis.del(`article:*`);
    return resultDeleteArticle;
  }

  public async updateArticle(articleParameters: UpdateArticleService) {
    const article = await this.articleDomain.updateArticle(articleParameters);

    if (!article) {
      throw new BadRequestException(MessageError.UpdateArticle);
    }

    await this.redis.del(`article:*`);

    return article;
  }
}
