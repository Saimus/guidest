import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module'
import { GuidesModule } from './guides/guides.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guide } from './guides/guide.entity';

@Module({
  imports: [UsersModule, GuidesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: '12345678a',
      database: 'guidest',
      entities: [Guide],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],  
})
export class AppModule {}
