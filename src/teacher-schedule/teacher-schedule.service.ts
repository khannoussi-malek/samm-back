import { Injectable } from '@nestjs/common';

import { UpdateTeacherScheduleDto } from './dto/update-teacher-schedule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TeacherSchedule } from './entities/teacher-schedule.entity';
import { Repository } from 'typeorm';
import { Multer } from 'multer';
@Injectable()
export class TeacherScheduleService {
  constructor(
    @InjectRepository(TeacherSchedule)
    private readonly TeacherScheduleRepository: Repository<TeacherSchedule>,
  ) {}
 
  

  findAll() {
    return `This action returns all teacherSchedule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacherSchedule`;
  }

  update(id: number, updateTeacherScheduleDto: UpdateTeacherScheduleDto) {
    return `This action updates a #${id} teacherSchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacherSchedule`;
  }
}
