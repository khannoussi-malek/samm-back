import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { DeepPartial, Repository } from 'typeorm';

const relations = ['teacher', 'chapters'];

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
  ) {}

  async create(createSubjectDto: CreateSubjectDto) {
    const subjectData: DeepPartial<Subject> = {
      name: createSubjectDto.name,
      coef: createSubjectDto.coef,
      type: createSubjectDto.type,
      teacher: { id: createSubjectDto.teacher }, // Assuming teacher ID is provided in createSubjectDto
    };
    const subject = this.subjectRepository.create(subjectData);
    return this.subjectRepository.save(subject);
  }

  async findAll(): Promise<Subject[]> {
    return this.subjectRepository.find({ relations });
  }

  async findOne(id: number): Promise<Subject> {
    return this.subjectRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateSubjectDto: UpdateSubjectDto,
  ): Promise<Subject> {
    const subjectPartial: DeepPartial<Subject> = {
      name: updateSubjectDto.name,
      coef: updateSubjectDto.coef,
      type: updateSubjectDto.type,
      teacher: { id: updateSubjectDto.teacher },
    };
    await this.subjectRepository.update(id, subjectPartial);
    return this.subjectRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.subjectRepository.delete(id);
  }
}
