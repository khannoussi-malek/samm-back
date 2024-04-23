import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { Role } from 'src/auth/guards/roles.enum';

export class GetUserDto {
  @IsEnum(Role)
  @IsOptional()
  @ApiProperty({ enum: Role })
  role?: Role;
}
