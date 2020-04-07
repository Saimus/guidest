import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConnection } from 'typeorm';
import { ormConfig } from './config/orm.config';
import { AppConfigService } from './config/config.service';

async function bootstrap() {
  const a = await createConnection(ormConfig)
    .then(async connection => await connection.close(), error => console.log("Cannot connect: ", error));  

  const app = await NestFactory.create(AppModule);

  const appConfig: AppConfigService = app.get('AppConfigService');
  await app.listen(appConfig.port);
}
bootstrap();
