import { Controller, Get, Post, Body, Put, Param, Delete, InternalServerErrorException, Patch } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      console.log('Creating user with data:', createUserDto);
      return await this.usersService.create(createUserDto);
    } catch (error) {
      console.error('Error creating user:', error);
      throw new InternalServerErrorException('Failed to create user.');
    }
  }
  

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto:UpdateUserDto): Promise<User> {
    return this.usersService.update(+id, updateUserDto);
  }
  
  //@Put(':id')
  //async update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto): Promise<User> {
   // return this.usersService.update(+id, updateUserDto);
  //}
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
