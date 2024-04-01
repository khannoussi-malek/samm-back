import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Potfolio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  status: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
