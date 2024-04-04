import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateNewsDto {
   
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    tilte: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    content: string;
  
    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty()
    visibility: boolean;
  
    
  
    @IsDate()
    @IsNotEmpty()
    @ApiProperty()
    createdAt: Date;
  
    @IsDate()
    @IsNotEmpty()
    @ApiProperty()
    updatedAt: Date;
  
}
