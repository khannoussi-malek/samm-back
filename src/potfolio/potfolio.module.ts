import { Module } from '@nestjs/common';
import { PotfolioService } from './potfolio.service';
import { PotfolioController } from './potfolio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Potfolio } from './entities/potfolio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Potfolio])],
  controllers: [PotfolioController],
  providers: [PotfolioService],
})
export class PotfolioModule {}
