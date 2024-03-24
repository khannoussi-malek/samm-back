import { PartialType } from '@nestjs/mapped-types';
import { CreateSubjectInfoDto } from './create-subject-info.dto';

export class UpdateSubjectInfoDto extends PartialType(CreateSubjectInfoDto) {}
