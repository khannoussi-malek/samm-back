import { Module } from '@nestjs/common';
import { PotfolioService } from './potfolio.service';
import { PotfolioController } from './potfolio.controller';

@Module({
  controllers: [PotfolioController],
  providers: [PotfolioService]
})
export class PotfolioModule {}
