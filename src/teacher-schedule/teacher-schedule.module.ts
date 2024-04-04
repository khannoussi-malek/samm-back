import { Module } from '@nestjs/common';
import { TeacherScheduleService } from './teacher-schedule.service';
import { TeacherScheduleController } from './teacher-schedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherSchedule } from './entities/teacher-schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([(TeacherSchedule)])],
  controllers: [TeacherScheduleController],
  providers: [TeacherScheduleService]
})
export class TeacherScheduleModule {}
