import { Departement } from 'src/departement/entities/departement.entity';
import { Update } from 'src/update/entities/update.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Major {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @ManyToOne(() => Departement, (departement) => departement.id, {
    onDelete: 'CASCADE',
  })
  departement: Departement;

  @OneToOne(() => Update, (update) => update.id)
  plan: Update;
}
