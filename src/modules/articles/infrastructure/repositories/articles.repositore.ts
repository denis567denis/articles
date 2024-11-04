import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticlesEntity } from '../entities';
import { CreateArticle, GetArticle, UpdateArticle } from './articles.repositore.interfaces';

@Injectable()
export class ArticlesRepository {
  constructor(
    @InjectRepository(ArticlesEntity)
    private articleEntity: Repository<ArticlesEntity>,
  ) {}

  public async getArticles({ email, name, sort, order = 'ASC', sortParam = 'name' }: GetArticle) {
    const queryBuilder = this.articleEntity.createQueryBuilder('article');
    if (sort) {
      queryBuilder.addOrderBy(`article.${sortParam}`, order);
    }
    if (email) {
      queryBuilder.where(`article.email = :email`, { email });
    }
    if (name) {
      queryBuilder.where(`article.name = :name`, { name });
    }
    return queryBuilder.execute();
  }

  public async createArticle(article: CreateArticle) {
    return this.articleEntity.save(article);
  }

  public async deleteArticle(articleId: number) {
    return this.articleEntity.delete({ id: articleId });
  }

  public async updateArticle({ articleId, ...article }: UpdateArticle) {
    return this.articleEntity.update({ id: articleId }, article);
  }
}
