import { Test, TestingModule } from '@nestjs/testing';
import { SubjectInfoService } from './subject-info.service';

describe('SubjectInfoService', () => {
  let service: SubjectInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubjectInfoService],
    }).compile();

    service = module.get<SubjectInfoService>(SubjectInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
