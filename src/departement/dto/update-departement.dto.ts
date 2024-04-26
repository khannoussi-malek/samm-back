import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class UpdateDepartementDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsDate()
  @ApiProperty()
  createdAt?: Date;

  @IsDate()
  @ApiProperty()
  updatedAt?: Date;
}
