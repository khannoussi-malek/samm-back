import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_GUARD } from '@nestjs/core';
import { SubjectModule } from './subject/subject.module';
import { DepartementModule } from './departement/departement.module';
import { ChapterModule } from './chapter/chapter.module';
import { MajorModule } from './major/major.module';
import { SpecialityModule } from './speciality/speciality.module';
import { CourseFileModule } from './course-file/course-file.module';

import { GroupModule } from './group/group.module';

import { PotfolioModule } from './potfolio/potfolio.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UserModule } from './users/users.module';

import { AuthModule } from './auth/auth.module';

import { AuthMiddleware } from './auth/middleware/auth.middleware';
import { RolesGuard } from './auth/guards/roles.guard';
import { Chapter } from './chapter/entities/chapter.entity';
import { CourseFile } from './course-file/entities/course-file.entity';
import { Departement } from './departement/entities/departement.entity';
import { Group } from './group/entities/group.entity';
import { Major } from './major/entities/major.entity';
import { Potfolio } from './potfolio/entities/potfolio.entity';
import { Speciality } from './speciality/entities/speciality.entity';
import { Subject } from './subject/entities/subject.entity';
import { NewsModule } from './news/news.module';
import { AdministrativeFileModule } from './administrative-file/administrative-file.module';
import { GradeModule } from './grade/grade.module';
import { TeacherScheduleModule } from './teacher-schedule/teacher-schedule.module';
import { GroupScheduleModule } from './group-schedule/group-schedule.module';
import { AdministrativeFile } from './administrative-file/entities/administrative-file.entity';
import { Grade } from './grade/entities/grade.entity';
import { News } from './news/entities/news.entity';
import { TeacherSchedule } from './teacher-schedule/entities/teacher-schedule.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
   
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5000,
      username: 'postgres',
      password: 'Sirine',
      database: 'MiniProjetDB',
      
      entities: [
        User,
        Chapter,
        CourseFile,
        Departement,
        Group,
        Major,
        Potfolio,
        Speciality,
        Subject,
        AdministrativeFile,
        Grade,
        News,
        TeacherSchedule
      ],
      synchronize: true,
    }),
    
    UserModule,
    SubjectModule,
    DepartementModule,
    ChapterModule,
    MajorModule,
    SpecialityModule,
    CourseFileModule,

    GroupModule,

    PotfolioModule,
    AuthModule,
    NewsModule,
    AdministrativeFileModule,
    GradeModule,
    TeacherScheduleModule,
    GroupScheduleModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*'); // Appliquer le middleware à toutes les routes
  }
}
