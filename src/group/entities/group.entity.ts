import { Subject } from 'src/subject/entities/subject.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  year: string;

  @Column({ nullable: true })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;

  @ManyToMany((type) => User, (students) => students.groups, {
    cascade: true,
  })
  @JoinTable()
  students?: User[];

  @ManyToMany((type) => Subject, (subjects) => subjects.groups, {
    cascade: true,
  })
  @JoinTable()
  subjects?: Subject[];
}
