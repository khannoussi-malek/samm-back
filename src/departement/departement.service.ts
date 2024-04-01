import { Injectable } from '@nestjs/common';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departement } from './entities/departement.entity';

@Injectable()
export class DepartementService {
  constructor(
    @InjectRepository(Departement)
    private readonly departmentRepository: Repository<Departement>,
  ) {}

  async create(createDepartementDto: CreateDepartementDto) {
    const department = this.departmentRepository.create(createDepartementDto);
    return this.departmentRepository.save(department);
  }

  async findAll(): Promise<Departement[]> {
    return this.departmentRepository.find();
  }

  async findOne(id: number): Promise<Departement> {
    return this.departmentRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateDepartementDto: UpdateDepartementDto,
  ): Promise<Departement> {
    await this.departmentRepository.update(id, updateDepartementDto);
    return this.departmentRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.departmentRepository.delete(id);
  }
}
