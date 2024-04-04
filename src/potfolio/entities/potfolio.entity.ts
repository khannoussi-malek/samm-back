import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Potfolio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  content: string;

  @Column({ default: '' })
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
