import { Injectable } from '@nestjs/common';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { Chapter } from './entities/chapter.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(Chapter)
    private readonly chapterRepository: Repository<Chapter>,
  ) {}

  async create(createChapterDto: CreateChapterDto) {
    const chapterData: DeepPartial<Chapter> = {
      name: createChapterDto.name,
      order: createChapterDto.order,
      subject: { id: createChapterDto.subject },
    };
    const chapter = this.chapterRepository.create(chapterData);
    return this.chapterRepository.save(chapter);
  }

  async findAll(): Promise<Chapter[]> {
    return this.chapterRepository.find();
  }

  async findOne(id: number): Promise<Chapter> {
    return this.chapterRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateChapterDto: UpdateChapterDto,
  ): Promise<Chapter> {
    const chapterPartial: DeepPartial<Chapter> = {
      name: updateChapterDto.name,
      order: updateChapterDto.order,
      subject : { id: updateChapterDto.subject },
    };

    await this.chapterRepository.update(id, chapterPartial);
    return this.chapterRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.chapterRepository.delete(id);
  }
}
