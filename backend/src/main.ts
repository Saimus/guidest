import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConnection } from 'typeorm';
import { config } from './orm.config';

async function bootstrap() {
  const a = await createConnection(config);
  await a.close();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
