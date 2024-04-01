import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Chapter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  order: number;
}
