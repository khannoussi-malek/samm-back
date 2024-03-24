import { PartialType } from '@nestjs/mapped-types';
import { CreatePotfolioDto } from './create-potfolio.dto';

export class UpdatePotfolioDto extends PartialType(CreatePotfolioDto) {}
