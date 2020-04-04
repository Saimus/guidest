import { Module } from '@nestjs/common';
import { GuidesController } from './guides.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guide } from './guide.entity';
import { GuidesService } from './guides.service';

@Module({
  imports: [TypeOrmModule.forFeature([Guide])],
  controllers: [GuidesController],
  providers: [GuidesService]
})
export class GuidesModule {}
