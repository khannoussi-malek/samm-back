import { Subject } from 'src/subject/entities/subject.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  grade: number;
  
  @Column()
  type: string;
  
  @ManyToOne(()=> Subject, subject => subject.grades)
  subject: Subject;
  
  @ManyToOne(()=> User, user => user.grades)
  student: User;
}
