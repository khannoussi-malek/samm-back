import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Chapter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: 0 })
  order: number;
}
