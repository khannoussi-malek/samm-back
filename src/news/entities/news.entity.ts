import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  content: string;

  @Column({ default: false })
  visibility: boolean;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
