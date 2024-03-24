import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseFileService } from './course-file.service';
import { CreateCourseFileDto } from './dto/create-course-file.dto';
import { UpdateCourseFileDto } from './dto/update-course-file.dto';

@Controller('course-file')
export class CourseFileController {
  constructor(private readonly courseFileService: CourseFileService) {}

  @Post()
  create(@Body() createCourseFileDto: CreateCourseFileDto) {
    return this.courseFileService.create(createCourseFileDto);
  }

  @Get()
  findAll() {
    return this.courseFileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseFileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseFileDto: UpdateCourseFileDto) {
    return this.courseFileService.update(+id, updateCourseFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseFileService.remove(+id);
  }
}
