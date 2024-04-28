import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { Departement } from './entities/departement.entity';
import { User } from 'src/users/entities/user.entity';
import { UserService } from 'src/users/users.service';

@Injectable()
export class DepartementService {
  constructor(
    @InjectRepository(Departement)
    private readonly departmentRepository: Repository<Departement>,
    private readonly userService: UserService,
  ) {}

  async create(createDepartementDto: CreateDepartementDto) {
    const preparDepartment = {
      ...createDepartementDto,

      teatching: createDepartementDto.teatching.map((userId) => ({
        id: +userId,
      })),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const department = this.departmentRepository.create(preparDepartment);
    return this.departmentRepository.save(department);
  }

  async findAll(): Promise<Departement[]> {
    return this.departmentRepository.find({
      relations: ['headOfDepartment', 'teatching'],
    });
  }

  async findOne(id: number): Promise<Departement> {
    return this.departmentRepository.findOne({ where: { id } });
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

    const updatedDepartement = {
      id,
      ...oldDepartment,
      ...updateDepartementDto,
      teatching: await Promise.all(
        updateDepartementDto.teatching.map((userId) => {
          return this.userService.findOne(userId);
        }),
      ),
    };

    this.departmentRepository.manager.transaction(async (transaction) => {
      await transaction.save(User, updatedDepartement.teatching);
      await transaction.save(Departement, updatedDepartement);
    });
    // await this.departmentRepository.update(id, updatedDepartement);
    return this.departmentRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.departmentRepository.delete(id);
  }
}
