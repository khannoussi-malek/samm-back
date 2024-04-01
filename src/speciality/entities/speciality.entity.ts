import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Speciality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
