import { Test, TestingModule } from '@nestjs/testing';
import { GroupScheduleService } from './group-schedule.service';

describe('GroupScheduleService', () => {
  let service: GroupScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupScheduleService],
    }).compile();

    service = module.get<GroupScheduleService>(GroupScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
