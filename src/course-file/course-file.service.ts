import { Injectable } from '@nestjs/common';
import { CreateCourseFileDto } from './dto/create-course-file.dto';
import { UpdateCourseFileDto } from './dto/update-course-file.dto';
import { CourseFile } from './entities/course-file.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CourseFileService {
  constructor(
    @InjectRepository(CourseFile)
    private readonly courseFileRepository: Repository<CourseFile>,
  ) {}

  async create(createCourseFileDto: CreateCourseFileDto) {
    const coursefile = this.courseFileRepository.create(createCourseFileDto);
    return this.courseFileRepository.save(coursefile);
  }

  async findAll(): Promise<CourseFile[]> {
    return this.courseFileRepository.find();
  }

  async findOne(id: number): Promise<CourseFile> {
    return this.courseFileRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateCourseFileDto: UpdateCourseFileDto,
  ): Promise<CourseFile> {
    await this.courseFileRepository.update(id, updateCourseFileDto);
    return this.courseFileRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.courseFileRepository.delete(id);
  }
}
