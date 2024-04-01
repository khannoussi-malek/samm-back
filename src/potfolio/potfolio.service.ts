import { Injectable } from '@nestjs/common';
import { CreatePotfolioDto } from './dto/create-potfolio.dto';
import { UpdatePotfolioDto } from './dto/update-potfolio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Potfolio } from './entities/potfolio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PotfolioService {
  constructor(
    @InjectRepository(Potfolio)
    private readonly portfolioRepository: Repository<Potfolio>,
  ) {}

  async create(createPotfolioDto: CreatePotfolioDto) {
    const portfolio = this.portfolioRepository.create(createPotfolioDto);
    return this.portfolioRepository.save(portfolio);
  }

  async findAll(): Promise<Potfolio[]> {
    return this.portfolioRepository.find();
  }

  async findOne(id: number): Promise<Potfolio> {
    return this.portfolioRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updatePotfolioDto: UpdatePotfolioDto,
  ): Promise<Potfolio> {
    await this.portfolioRepository.update(id, updatePotfolioDto);
    return this.portfolioRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.portfolioRepository.delete(id);
  }
}
