import { Module } from '@nestjs/common';
import { ArticleController } from './presentation';
import { ArticleService } from './application';
import { ArticleDomain } from './domain';
import { ArticlesEntity, ArticlesRepository } from './infrastructure';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtConfigService } from 'src/config/jwt';

@Module({
  controllers: [ArticleController],
  exports: [],
  imports: [JwtModule.registerAsync({ useClass: JwtConfigService }), TypeOrmModule.forFeature([ArticlesEntity])],
  providers: [ArticleService, ArticleDomain, ArticlesRepository],
})
export class ArticlesModule {}
