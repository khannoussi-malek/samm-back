import { Injectable } from '@nestjs/common';
import { CreateCourseFileDto } from './dto/create-course-file.dto';
import { UpdateCourseFileDto } from './dto/update-course-file.dto';

@Injectable()
export class CourseFileService {
  create(createCourseFileDto: CreateCourseFileDto) {
    return 'This action adds a new courseFile';
  }

  findAll() {
    return `This action returns all courseFile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseFile`;
  }

  update(id: number, updateCourseFileDto: UpdateCourseFileDto) {
    return `This action updates a #${id} courseFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseFile`;
  }
}
