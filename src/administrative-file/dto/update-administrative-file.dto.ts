import { PartialType } from '@nestjs/swagger';
import { CreateAdministrativeFileDto } from './create-administrative-file.dto';

export class UpdateAdministrativeFileDto extends PartialType(CreateAdministrativeFileDto) {}
