import { Injectable } from '@nestjs/common';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';

@Injectable()
export class DepartementService {
  create(createDepartementDto: CreateDepartementDto) {
    return 'This action adds a new departement';
  }

  findAll() {
    return `This action returns all departement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} departement`;
  }

  update(id: number, updateDepartementDto: UpdateDepartementDto) {
    return `This action updates a #${id} departement`;
  }

  remove(id: number) {
    return `This action removes a #${id} departement`;
  }
}
