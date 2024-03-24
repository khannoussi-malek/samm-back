import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubjectInfoService } from './subject-info.service';
import { CreateSubjectInfoDto } from './dto/create-subject-info.dto';
import { UpdateSubjectInfoDto } from './dto/update-subject-info.dto';

@Controller('subject-info')
export class SubjectInfoController {
  constructor(private readonly subjectInfoService: SubjectInfoService) {}

  @Post()
  create(@Body() createSubjectInfoDto: CreateSubjectInfoDto) {
    return this.subjectInfoService.create(createSubjectInfoDto);
  }

  @Get()
  findAll() {
    return this.subjectInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectInfoDto: UpdateSubjectInfoDto) {
    return this.subjectInfoService.update(+id, updateSubjectInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectInfoService.remove(+id);
  }
}
