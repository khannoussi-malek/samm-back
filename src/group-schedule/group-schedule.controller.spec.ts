import { Test, TestingModule } from '@nestjs/testing';
import { GroupScheduleController } from './group-schedule.controller';
import { GroupScheduleService } from './group-schedule.service';

describe('GroupScheduleController', () => {
  let controller: GroupScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupScheduleController],
      providers: [GroupScheduleService],
    }).compile();

    controller = module.get<GroupScheduleController>(GroupScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
