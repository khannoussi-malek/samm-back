import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupScheduleService } from './group-schedule.service';
import { CreateGroupScheduleDto } from './dto/create-group-schedule.dto';
import { UpdateGroupScheduleDto } from './dto/update-group-schedule.dto';

@Controller('group-schedule')
export class GroupScheduleController {
  constructor(private readonly groupScheduleService: GroupScheduleService) {}

  @Post()
  create(@Body() createGroupScheduleDto: CreateGroupScheduleDto) {
    return this.groupScheduleService.create(createGroupScheduleDto);
  }

  @Get()
  findAll() {
    return this.groupScheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupScheduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupScheduleDto: UpdateGroupScheduleDto) {
    return this.groupScheduleService.update(+id, updateGroupScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupScheduleService.remove(+id);
  }
}
