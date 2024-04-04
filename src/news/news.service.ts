import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from './entities/news.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>,
  ) {}
  async create(createNewsDto: CreateNewsDto): Promise<News> {
    const user = this.newsRepository.create(createNewsDto);
    return this.newsRepository.save(user);
  }
  async findAll(): Promise<News[]> {
    return this.newsRepository.find();
  }

  async findOne(id: number): Promise<News> {
    return this.newsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateNewsDto: UpdateNewsDto): Promise<News> {
    await this.newsRepository.update(id, updateNewsDto);
    return this.newsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.newsRepository.delete(id);
  }
}
