import { PartialType } from '@nestjs/swagger';
import { CreateTeacherScheduleDto } from './create-teacher-schedule.dto';

export class UpdateTeacherScheduleDto extends PartialType(CreateTeacherScheduleDto) {}
