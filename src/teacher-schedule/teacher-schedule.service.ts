import { Injectable, NotFoundException } from '@nestjs/common';

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
  async uploadFile(filename: string, data: Buffer): Promise<void> {
    const file = new TeacherSchedule();
    file.filename = filename;
    file.data = data;
    await this.TeacherScheduleRepository.save(file);
   
  }
  async downloadFile(filename: string): Promise<TeacherSchedule> {
  const file= await this.TeacherScheduleRepository.findOne({ where: { filename } });
    if (!file) {
      throw new NotFoundException('File not found');
    }
    return file;
  
  }
  async getFileByName(filename: string): Promise<TeacherSchedule> {
    return await this.TeacherScheduleRepository.findOne({ where: { filename } });
  }
async findAll(): Promise<TeacherSchedule[]> {
    return this.TeacherScheduleRepository.find();
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
