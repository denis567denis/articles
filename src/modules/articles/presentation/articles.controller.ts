import { Body, Controller, Delete, Get, Patch, Post, UseGuards } from '@nestjs/common';

import { ArticleService } from '../application';
import { AuthGuard } from '@nestjs/passport';
import { CreateArticle, DeleteArticle, GetArticles, UpdateArticle } from './articles.controller.interface';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('getArticles')
  async getArticles(@Body() body: GetArticles) {
    return this.articleService.getArticles(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('createArticle')
  async createArticle(@Body() body: CreateArticle) {
    return this.articleService.createArticle(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('deleteArticle')
  async deleteArticle(@Body() body: DeleteArticle) {
    return this.articleService.deleteArticle(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('updateArticle')
  async updateArticle(@Body() body: UpdateArticle) {
    return this.articleService.updateArticle(body);
  }
}
