import { Injectable } from '@nestjs/common';
import { CreateAdministrativeFileDto } from './dto/create-administrative-file.dto';
import { UpdateAdministrativeFileDto } from './dto/update-administrative-file.dto';
import { AdministrativeFile } from './entities/administrative-file.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { promises } from 'dns';


@Injectable()
export class AdministrativeFileService {
  constructor(
    @InjectRepository(AdministrativeFile)
    private readonly AdministrativeFileRepository: Repository<AdministrativeFile>,
  ) {}
 async create(createAdministrativeFileDto: CreateAdministrativeFileDto) :Promise<AdministrativeFile>{
    const AdministrativeFile = this.AdministrativeFileRepository.create(createAdministrativeFileDto);
    return this.AdministrativeFileRepository.save(AdministrativeFile);
  }

  async findAll() :Promise<AdministrativeFile[]> {
    return this.AdministrativeFileRepository.find();
  }
  async findOne(id: number): Promise<AdministrativeFile> {
    return this.AdministrativeFileRepository.findOne({ where: { id } });
  }
  async  update(id: number,updateAdministrativeFileDto: UpdateAdministrativeFileDto):Promise<AdministrativeFile>  {
    await this.AdministrativeFileRepository.update(id, updateAdministrativeFileDto);
    return this.AdministrativeFileRepository.findOne({ where: { id } });
  }

  

  async remove(id: number): Promise<void>  {
    await this.AdministrativeFileRepository.delete(id);
  }
}
