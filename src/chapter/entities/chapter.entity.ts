import { CourseFile } from 'src/course-file/entities/course-file.entity';
import { Subject } from 'src/subject/entities/subject.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chapter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: 0 })
  order: number; 
  
  @Column({ default: 50 })
  pages: number;

  @Column({ default: 'Cours' })
  type: string;

  @ManyToOne(() => Subject, subject => subject.chapters)
  subject: Subject;

  @OneToMany(() => CourseFile, courseFile => courseFile.chapter)
  courseFiles: CourseFile[];
}
