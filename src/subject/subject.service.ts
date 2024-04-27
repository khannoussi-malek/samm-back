import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { DeepPartial, Repository } from 'typeorm';
import { UserService } from 'src/users/users.service';

const relations = ['teacher', 'chapters'];

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
    private readonly userService: UserService,
  ) {}

  async create(createSubjectDto: CreateSubjectDto) {
    const teacher = await this.userService.findOne(createSubjectDto.teacher);
    if (teacher.role == 'teacher') {
      const subjectData: DeepPartial<Subject> = {
        name: createSubjectDto.name,
        coef: createSubjectDto.coef,
        type: createSubjectDto.type,
        teacher: { id: createSubjectDto.teacher },
      };
      const subject = this.subjectRepository.create(subjectData);
      return this.subjectRepository.save(subject);
    } else {
      throw new NotAcceptableException('not a teacher');
    }
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
