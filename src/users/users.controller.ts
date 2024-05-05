import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  InternalServerErrorException,
  Patch,
  UseGuards,
  Query,
  Put,
  NotFoundException,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './users.service';
import { User } from './entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/guards/roles.decorator';
import { Role } from 'src/auth/guards/roles.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { GetUserDto } from './dto/getUserDto.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.usersService.create(createUserDto);
    } catch (error) {
      throw new InternalServerErrorException('Failed to create user.');
    }
  }

  @Get()
  findAll(@Query() getUsersDto: GetUserDto) {
    if (getUsersDto.role) {
      return this.usersService.findAllByRole(getUsersDto);
    }
    return this.usersService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin) // Spécifie que seul un utilisateur avec le rôle Admin peut accéder à cette route
  @UseGuards(RolesGuard)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  async updateUserWithSubjects(@Param('id') id: string, @Body() updateUserDto: Partial<User>) {
    const user = await this.usersService.updateUserWithSubjects(Number(id), updateUserDto);
    return user;
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
