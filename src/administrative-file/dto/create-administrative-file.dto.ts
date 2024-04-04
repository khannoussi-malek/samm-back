import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateAdministrativeFileDto {
     @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    content: string;
  
   
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    status: string;
  
    
  
    @IsDate()
    @IsNotEmpty()
    @ApiProperty()
    createdAt: Date;
  
    @IsDate()
    @IsNotEmpty()
    @ApiProperty()
    updatedAt: Date;
  }
