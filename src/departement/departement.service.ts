import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { Departement } from './entities/departement.entity';

@Injectable()
export class DepartementService {
  constructor(
    @InjectRepository(Departement)
    private readonly departmentRepository: Repository<Departement>,
  ) {}

  async create(createDepartementDto: CreateDepartementDto) {
    const preparDepartment = {
      ...createDepartementDto,

      teatching:
        createDepartementDto.teatching?.map((userId) => ({
          id: +userId,
        })) || [],
      createdAt: new Date(),
      updatedAt: new Date(),
      majors:
        createDepartementDto.majors?.map((major) => ({
          id: +major,
        })) || [],
    };
    const department = this.departmentRepository.create(preparDepartment);
    return this.departmentRepository.save(department);
  }

  async findAll(): Promise<Departement[]> {
    return this.departmentRepository.find({
      relations: ['headOfDepartment', 'teatching', 'majors'],
    });
  }

  async findOne(id: number): Promise<Departement> {
    return this.departmentRepository.findOne({
      where: { id },
      relations: ['headOfDepartment', 'teatching', 'majors'],
    });
  }

  async update(
    id: number,
    updateDepartementDto: UpdateDepartementDto,
  ): Promise<Departement> {
    const oldDepartment = await this.departmentRepository.findOne({
      where: { id },
    });

    if (!oldDepartment) {
      throw new Error('Department not found');
    }

    const { teatching, majors, ...updateDepartementFromDto } =
      updateDepartementDto;

    const updateDepartement = this.departmentRepository.create({
      ...oldDepartment,
      ...updateDepartementFromDto,
      headOfDepartmentId: +updateDepartementFromDto.headOfDepartmentId,
      teatching: teatching.map((id) => ({ id: +id })) || [],
      majors: majors?.map((id) => ({ id: +id })) || [],
    });

    await this.departmentRepository.save(updateDepartement);
    return this.departmentRepository.findOne({
      where: { id },
      relations: ['headOfDepartment', 'teatching', 'majors'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.departmentRepository.delete(id);
  }
}
