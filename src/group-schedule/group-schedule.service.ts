import { Injectable } from '@nestjs/common';
import { CreateGroupScheduleDto } from './dto/create-group-schedule.dto';
import { UpdateGroupScheduleDto } from './dto/update-group-schedule.dto';

@Injectable()
export class GroupScheduleService {
  create(createGroupScheduleDto: CreateGroupScheduleDto) {
    return 'This action adds a new groupSchedule';
  }

  findAll() {
    return `This action returns all groupSchedule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} groupSchedule`;
  }

  update(id: number, updateGroupScheduleDto: UpdateGroupScheduleDto) {
    return `This action updates a #${id} groupSchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} groupSchedule`;
  }
}
