import { Test, TestingModule } from '@nestjs/testing';
import { CourseFileService } from './course-file.service';

describe('CourseFileService', () => {
  let service: CourseFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseFileService],
    }).compile();

    service = module.get<CourseFileService>(CourseFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
