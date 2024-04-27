import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateDepartementDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
