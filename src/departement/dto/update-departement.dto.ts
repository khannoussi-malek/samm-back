import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateDepartementDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsOptional()
  @ApiProperty()
  headOfDepartmentId?: string;

  @IsOptional()
  @ApiProperty()
  teatching?: string[];

  @IsOptional()
  @ApiProperty()
  majors?: string[];
}
