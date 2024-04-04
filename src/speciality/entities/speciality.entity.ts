import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Speciality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;
}
