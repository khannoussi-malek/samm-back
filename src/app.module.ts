
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SubjectModule } from './subject/subject.module';
import { DepartementModule } from './departement/departement.module';
import { ChapterModule } from './chapter/chapter.module';
import { MajorModule } from './major/major.module';
import { SpecialityModule } from './speciality/speciality.module';
import { CourseFileModule } from './course-file/course-file.module';
import { ClassroomModule } from './classroom/classroom.module';
import { SessionModule } from './session/session.module';
import { GroupModule } from './group/group.module';
import { SubjectInfoModule } from './subject-info/subject-info.module';
import { PotfolioModule } from './potfolio/potfolio.module';
import { Module } from '@nestjs/common';
import {TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UserModule } from './users/users.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5000,
      username: 'postgres',
      password: 'Sirine',
      database: 'MiniProjetDB',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  UserModule, 
  SubjectModule, 
  DepartementModule, 
  ChapterModule, 
  MajorModule, 
  SpecialityModule, CourseFileModule, ClassroomModule, SessionModule, GroupModule, SubjectInfoModule, PotfolioModule, StudentModule, TeacherModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
  

})
export class AppModule {}
