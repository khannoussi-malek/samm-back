import { Injectable } from '@nestjs/common';
import { CreateSubjectInfoDto } from './dto/create-subject-info.dto';
import { UpdateSubjectInfoDto } from './dto/update-subject-info.dto';

@Injectable()
export class SubjectInfoService {
  create(createSubjectInfoDto: CreateSubjectInfoDto) {
    return 'This action adds a new subjectInfo';
  }

  findAll() {
    return `This action returns all subjectInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subjectInfo`;
  }

  update(id: number, updateSubjectInfoDto: UpdateSubjectInfoDto) {
    return `This action updates a #${id} subjectInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} subjectInfo`;
  }
}
