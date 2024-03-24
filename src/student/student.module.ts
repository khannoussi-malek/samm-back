import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { UserModule } from 'src/users/users.module';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  imports:[UserModule]
})
export class StudentModule {}
