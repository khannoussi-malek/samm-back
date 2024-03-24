import { Test, TestingModule } from '@nestjs/testing';
import { CourseFileController } from './course-file.controller';
import { CourseFileService } from './course-file.service';

describe('CourseFileController', () => {
  let controller: CourseFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseFileController],
      providers: [CourseFileService],
    }).compile();

    controller = module.get<CourseFileController>(CourseFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
