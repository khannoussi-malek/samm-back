
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_GUARD } from '@nestjs/core';
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
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import {TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UserModule } from './users/users.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { AuthModule } from './auth/auth.module';

import { AuthMiddleware } from './auth/middleware/auth.middleware';
import { RolesGuard } from './auth/guards/roles.guard';

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
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: RolesGuard,
  },],
  

})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*'); // Appliquer le middleware à toutes les routes
  }}
