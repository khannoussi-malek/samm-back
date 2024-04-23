import { Subject } from 'src/subject/entities/subject.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Chapter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: 0 })
  order: number;

  @ManyToOne(()=> Subject, subject => subject.chapters)
  subject: Subject;
}
