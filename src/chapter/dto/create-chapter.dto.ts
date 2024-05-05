import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsIn } from 'class-validator';

export class CreateChapterDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  order: number;

  @IsString()
  @IsNotEmpty()
  @IsIn(['TD', 'TP', 'Cours'])
  @ApiProperty({ enum: ['TD', 'TP', 'Cours'] })
  type: 'TD' | 'TP' | 'Cours';

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  subject: number;
}
