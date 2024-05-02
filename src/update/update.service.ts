import { Injectable } from '@nestjs/common';
import { UpdateUpdateDto } from './dto/update-update.dto';
import { Update } from './entities/update.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UpdateService {
  constructor(
    @InjectRepository(Update)
    private readonly repository: Repository<Update>,
  ) {}

  async create(file: Express.Multer.File) {
    console.log('file', file);

    const uploadFile = await new Update();
    uploadFile.fieldname = file.fieldname;
    uploadFile.originalname = file.originalname;
    uploadFile.encoding = file.encoding;
    uploadFile.mimetype = file.mimetype;
    uploadFile.destination = file.destination;
    uploadFile.filename = file.filename;
    uploadFile.path = file.path;
    uploadFile.size = file.size;

    return await this.repository.save(uploadFile);
     
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  async update(id: number, updateUpdateDto: UpdateUpdateDto) {
    await this.repository.update(id, updateUpdateDto);
    return this.repository.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
