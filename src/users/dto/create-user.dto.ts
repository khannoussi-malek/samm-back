// user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MinLength,
  isEnum,
} from 'class-validator';
import { Role } from 'src/auth/guards/roles.enum';

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
   
  @IsEnum(Role)
  @IsOptional()
  @ApiProperty({enum:Role })
  
  role?:Role

  
}
 