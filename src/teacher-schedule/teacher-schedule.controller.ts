import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { TeacherScheduleService } from './teacher-schedule.service';

import { UpdateTeacherScheduleDto } from './dto/update-teacher-schedule.dto';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('teacher-schedules')
@Controller('teacher-schedules')
export class TeacherScheduleController {
  constructor(private readonly teacherScheduleService: TeacherScheduleService) {}

  

  @Get()
  findAll() {
    return this.teacherScheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherScheduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherScheduleDto: UpdateTeacherScheduleDto) {
    return this.teacherScheduleService.update(+id, updateTeacherScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherScheduleService.remove(+id);
  }
}
