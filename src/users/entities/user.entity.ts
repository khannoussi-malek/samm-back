import { Departement } from 'src/departement/entities/departement.entity';
import { Grade } from 'src/grade/entities/grade.entity';
import { Group } from 'src/group/entities/group.entity';
import { Potfolio } from 'src/potfolio/entities/potfolio.entity';
import { Subject } from 'src/subject/entities/subject.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  email: string;

  @Column({ nullable: true, unique: true })
  phone: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  photo: string;

  @Column({ nullable: true })
  CIN: string;

  @Column({ nullable: true })
  passport: string;

  @Column({ nullable: true })
  role: 'teacher' | 'Student' | 'Admin';

  @OneToMany(() => Subject, subject => subject.teacher)
subject: Subject[];

  @ManyToMany(() => Group, (groups) => groups.students)
  @JoinTable()
  groups: Group[];

  @OneToMany(() => Potfolio, (portfolio) => portfolio.student)
  portfolio?: Potfolio[];
  @ManyToMany(() => Departement, (departement) => departement.id)
  @JoinTable({
    name: 'departement_teaching',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'departement_id', referencedColumnName: 'id' },
  })
  teatching?: Departement[];

  @OneToMany(() => Grade, (grade) => grade.student)
  grades?: Grade[]
}
