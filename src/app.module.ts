import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModule } from './user/user.module';
@Module({
  imports: [ArticleModule,
    UserModule,
    TypegooseModule.forRoot('mongodb://localhost:27017/blog-xym-api', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
