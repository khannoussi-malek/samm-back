import { Test, TestingModule } from '@nestjs/testing';
import { PotfolioController } from './potfolio.controller';
import { PotfolioService } from './potfolio.service';

describe('PotfolioController', () => {
  let controller: PotfolioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PotfolioController],
      providers: [PotfolioService],
    }).compile();

    controller = module.get<PotfolioController>(PotfolioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
