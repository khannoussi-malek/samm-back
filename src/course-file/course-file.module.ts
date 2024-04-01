import { Module } from '@nestjs/common';
import { CourseFileService } from './course-file.service';
import { CourseFileController } from './course-file.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseFile } from './entities/course-file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseFile])],
  controllers: [CourseFileController],
  providers: [CourseFileService],
})
export class CourseFileModule {}
