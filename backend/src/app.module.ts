import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module'
import { GuidesModule } from './guides/guides.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/orm.config';
import { AppConfigModule } from './config/config.module';

@Module({
  imports: [UsersModule, GuidesModule, AppConfigModule,
    TypeOrmModule.forRoot(ormConfig),],
  controllers: [AppController],
  providers: [AppService],  
})
export class AppModule {}
