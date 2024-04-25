import { Speciality } from 'src/speciality/entities/speciality.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Major {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  plan: string;

  @OneToMany(() => Speciality, (speciality) => speciality.major, { cascade: true, })
    specialty: Speciality[];
}
