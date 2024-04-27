import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateGroupDto } from './create-group.dto';

export class UpdateGroupDto extends CreateGroupDto {
  @IsOptional()
  @ApiProperty()
  students?: number[];

  @IsOptional()
  @ApiProperty()
  subjects?: number[];
}
