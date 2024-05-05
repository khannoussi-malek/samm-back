// user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';

import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUserDto } from './dto/getUserDto.dto';

const relations = ['subject', 'groups'];
@Injectable()
export class UserService {
  [x: string]: any;
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({ relations });
  }

  async findAllByRole(user: GetUserDto): Promise<User[]> {
    return this.userRepository.find({
      where: { role: user.role },
      relations,
    });
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }
  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

 /* async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, updateUserDto);
    return this.userRepository.findOne({ where: { id } });
  }*/

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
  async updateUserWithSubjects(userId: number, updateUserDto: Partial<User>): Promise<User> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.subject', 'subject')
      .where('user.id = :id', { id: userId })
      .getOne();

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    Object.assign(user, updateUserDto);
    await this.userRepository.save(user);

    return user;
  }
}
