import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Major {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  plan: string;
}
