import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateDepartementDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsOptional()
  @ApiProperty()
  headOfDepartmentId?: number;

  @IsOptional()
  @ApiProperty()
  teatching?: number[];

  @IsOptional()
  @ApiProperty()
  majors?: number[];
}
