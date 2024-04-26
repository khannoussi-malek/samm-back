import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
  })
  year: string;

  @IsOptional()
  @ApiProperty()
  students: number[];
}
