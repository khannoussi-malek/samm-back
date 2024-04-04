import { Injectable } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Grade } from './entities/grade.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GradeService {
  constructor(
    @InjectRepository(Grade)
    private readonly gradeRepository: Repository<Grade>,
  ) {}
  async create(createGradeDto: CreateGradeDto):Promise<Grade>{
    const grade = this.gradeRepository.create(createGradeDto);
    return this.gradeRepository.save(grade);
  }

  async findAll() :Promise<Grade[]>{
    return this.gradeRepository.find();
  }

  async findOne(id: number) :Promise<Grade>{
    return this.gradeRepository.findOne({ where: { id } });
  }

  async update(id: number, updateGradeDto: UpdateGradeDto) {
    await this.gradeRepository.update(id, updateGradeDto);
    return this.gradeRepository.findOne({ where: { id } });
  
  }

  async remove(id: number) :Promise<void>{
    await this.gradeRepository.delete(id);
  }
}
