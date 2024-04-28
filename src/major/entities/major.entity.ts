import { Departement } from 'src/departement/entities/departement.entity';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Major {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  plan: string;

  @ManyToOne(() => Departement, (departement) => departement.id, { onDelete: 'CASCADE' })
  departement: Departement;
}
