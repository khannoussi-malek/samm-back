import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';

import { UserModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Subject]), UserModule],
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}
