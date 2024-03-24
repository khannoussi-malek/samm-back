import { Module } from '@nestjs/common';
import { SubjectInfoService } from './subject-info.service';
import { SubjectInfoController } from './subject-info.controller';

@Module({
  controllers: [SubjectInfoController],
  providers: [SubjectInfoService]
})
export class SubjectInfoModule {}
