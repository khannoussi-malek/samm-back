import { Injectable } from '@nestjs/common';
import { CreatePotfolioDto } from './dto/create-potfolio.dto';
import { UpdatePotfolioDto } from './dto/update-potfolio.dto';

@Injectable()
export class PotfolioService {
  create(createPotfolioDto: CreatePotfolioDto) {
    return 'This action adds a new potfolio';
  }

  findAll() {
    return `This action returns all potfolio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} potfolio`;
  }

  update(id: number, updatePotfolioDto: UpdatePotfolioDto) {
    return `This action updates a #${id} potfolio`;
  }

  remove(id: number) {
    return `This action removes a #${id} potfolio`;
  }
}
