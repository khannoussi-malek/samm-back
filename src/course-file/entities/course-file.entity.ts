import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CourseFile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;
}
