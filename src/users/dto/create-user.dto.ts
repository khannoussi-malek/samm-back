// user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nom: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  prenom: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsPhoneNumber('TN')
  @IsOptional()
  @ApiProperty()
  phone?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  photo?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  CIN?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  
  passport?:string
   
  @IsString()
  @IsOptional()
  @ApiProperty()
  
  role?:'teacher' | 'Student'|'Admin'
}

