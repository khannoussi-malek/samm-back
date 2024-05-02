import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Update {
  constructor(update: Partial<Update>) {
    this.fieldname = update.fieldname || '';
    this.originalname = update.originalname || '';
    this.encoding = update.encoding || '';
    this.mimetype = update.mimetype || '';
    this.destination = update.destination || '';
    this.filename = update.filename || '';
    this.path = update.path || '';
    this.size = update.size || 0;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
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
