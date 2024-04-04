import { Module } from '@nestjs/common';
import { GroupScheduleService } from './group-schedule.service';
import { GroupScheduleController } from './group-schedule.controller';

@Module({
  controllers: [GroupScheduleController],
  providers: [GroupScheduleService]
})
export class GroupScheduleModule {}
