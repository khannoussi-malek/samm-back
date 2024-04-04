import { PartialType } from '@nestjs/swagger';
import { CreateGroupScheduleDto } from './create-group-schedule.dto';

export class UpdateGroupScheduleDto extends PartialType(CreateGroupScheduleDto) {}
