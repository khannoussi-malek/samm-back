import { Injectable } from '@nestjs/common';
import { CreateMajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Major } from './entities/major.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MajorService {
  constructor(
    @InjectRepository(Major)
    private readonly majorRepository: Repository<Major>,
  ) {}

  async create(createMajorDto: CreateMajorDto) {
    const major = this.majorRepository.create(createMajorDto);
    return this.majorRepository.save(major);
  }

  async findAll(): Promise<Major[]> {
    return this.majorRepository.find();
  }

  async findOne(id: number): Promise<Major> {
    return this.majorRepository.findOne({ where: { id } });
  }

  async update(id: number, updateMajorDto: UpdateMajorDto): Promise<Major> {
    await this.majorRepository.update(id, updateMajorDto);
    return this.majorRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.majorRepository.delete(id);
  }
}
