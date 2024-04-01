import { Injectable } from '@nestjs/common';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Speciality } from './entities/speciality.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SpecialityService {
  constructor(
    @InjectRepository(Speciality)
    private readonly specialtyRepository: Repository<Speciality>,
  ) {}

  async create(createSpecialityDto: CreateSpecialityDto) {
    const coursefile = this.specialtyRepository.create(createSpecialityDto);
    return this.specialtyRepository.save(coursefile);
  }

  async findAll(): Promise<Speciality[]> {
    return this.specialtyRepository.find();
  }

  async findOne(id: number): Promise<Speciality> {
    return this.specialtyRepository.findOne({ where: { id } });
  }

  async update(id: number, updateSpecialityDto: UpdateSpecialityDto) {
    await this.specialtyRepository.update(id, updateSpecialityDto);
    return this.specialtyRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.specialtyRepository.delete(id);
  }
}
