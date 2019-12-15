import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { Article } from './article.model';
import { TypegooseModule } from 'nestjs-typegoose';
@Module({
  imports: [
    TypegooseModule.forFeature([Article]),
  ],
  controllers: [ArticleController],
})
export class ArticleModule {}
