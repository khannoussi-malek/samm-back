import { Module } from '@nestjs/common';
import { UpdateService } from './update.service';
import { UpdateController } from './update.controller';
import { Update } from './entities/update.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Update])],
  controllers: [UpdateController],
  providers: [UpdateService],
})
export class UpdateModule {}
