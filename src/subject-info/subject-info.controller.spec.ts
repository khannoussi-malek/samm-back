import { Test, TestingModule } from '@nestjs/testing';
import { SubjectInfoController } from './subject-info.controller';
import { SubjectInfoService } from './subject-info.service';

describe('SubjectInfoController', () => {
  let controller: SubjectInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubjectInfoController],
      providers: [SubjectInfoService],
    }).compile();

    controller = module.get<SubjectInfoController>(SubjectInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
