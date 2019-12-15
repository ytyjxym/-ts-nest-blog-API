import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path'
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 使用管道
  app.useGlobalPipes(new ValidationPipe());
  // 静态资源
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/public/',
  });
  // 模板引擎
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
// 接口文档
  const options = new DocumentBuilder()
    .setTitle('个人博客API')
    .setDescription('博客')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
