import { Test, TestingModule } from '@nestjs/testing';
import { PotfolioService } from './potfolio.service';

describe('PotfolioService', () => {
  let service: PotfolioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PotfolioService],
    }).compile();

    service = module.get<PotfolioService>(PotfolioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
