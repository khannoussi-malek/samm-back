// user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MinLength
} from 'class-validator';

export class signupStudentDto {
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
  CIN?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  
  passport?:string

}
 