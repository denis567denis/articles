import { Injectable, Logger } from '@nestjs/common';
import { ArticlesRepository } from '../infrastructure';
import { CreateArticleDomain, GetArticleDomain, UpdateArticleDomain } from './articles.domain.interface';

@Injectable()
export class ArticleDomain {
  private readonly logger = new Logger(ArticleDomain.name);
  constructor(private readonly ArticleRepository: ArticlesRepository) {}

  public async getArticles({ email, name, sort, order, sortParam }: GetArticleDomain) {
    if (!name && !email && !sort) {
      return null;
    }
    return this.ArticleRepository.getArticles({ email, name, sort, order, sortParam });
  }

  public async createArticle(Article: CreateArticleDomain) {
    return this.ArticleRepository.createArticle(Article);
  }

  public async deleteArticle(articleId: number) {
    return this.ArticleRepository.deleteArticle(articleId);
  }

  public async updateArticle({ email, name, articleId, decription }: UpdateArticleDomain) {
    if (!name && !decription && !email) {
      return null;
    }
    return this.ArticleRepository.updateArticle({ email, name, articleId, decription });
  }
}
