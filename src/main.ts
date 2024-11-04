import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
//import { ExceptionFilter } from '@test-project/exceptions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalFilters(new ExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.TEST_PORT ?? 3000);
}

bootstrap();
