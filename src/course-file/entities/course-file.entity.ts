import { Subject } from 'rxjs';
import { Chapter } from 'src/chapter/entities/chapter.entity';
import { Update } from 'src/update/entities/update.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CourseFile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  type: string;

  @ManyToOne(() => Chapter, (chapter) => chapter.courseFiles)
  chapter: Chapter;

  @OneToOne(() => Update, (update) => update.id)
  file: Update;
}
