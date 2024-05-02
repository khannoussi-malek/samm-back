import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Update {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '', nullable: true })
  fieldname: string;

  @Column({ default: '' })
  originalname: string;

  @Column({ default: '' })
  encoding: string;

  @Column({ default: '' })
  mimetype: string;

  @Column({ default: '' })
  destination: string;

  @Column({ default: '' })
  filename: string;

  @Column({ default: '' })
  path: string;

  @Column()
  size: number;
}
