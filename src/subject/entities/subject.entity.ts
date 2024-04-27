import { Chapter } from 'src/chapter/entities/chapter.entity';
import { Group } from 'src/group/entities/group.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: 0 })
  coef: number;

  @Column({ default: '' })
  type: string;

  @ManyToOne(() => User, (user) => user.subject)
  teacher: User;

  @OneToMany(() => Chapter, (chapter) => chapter.subject)
  chapters: Chapter[];

  @ManyToMany(() => Group, (groups) => groups.subjects)
  groups: Group[];
}
