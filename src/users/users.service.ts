
// user.service.ts
import { Injectable } from '@nestjs/common';

import { FindOneOptions, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { IsEmail } from 'class-validator';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    
    return this.userRepository.findOne({where:{id}});
  }
  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
}

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, updateUserDto);
    return this.userRepository.findOne({where:{id}});;
}

 
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}