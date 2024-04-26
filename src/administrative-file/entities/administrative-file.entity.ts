import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class AdministrativeFile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: string;

  @Column()
  content: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
