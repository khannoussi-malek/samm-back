import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Departement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
