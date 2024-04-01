import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseFileDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
