import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UpdateUpdateDto } from './dto/update-update.dto';
import { Update } from './entities/update.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class UpdateService {
  constructor(
    @InjectRepository(Update)
    private readonly repository: Repository<Update>,
  ) {}

  async create(file: Express.Multer.File) {
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

  async getFileById(id: number) {
    return await this.repository.findOne({ where: { id } });
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

  async deleteFile(file: Update) {
    const filePath = path.join('./uploads', file.filename);

    try {
      // Supprimer le fichier du répertoire
      fs.unlinkSync(filePath);
    } catch (err) {
      throw new InternalServerErrorException('Could not delete file');
    }

    // Supprimer le fichier de la base de données
    await this.repository.remove(file);
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
