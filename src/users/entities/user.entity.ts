// user.entity.ts
import { AdministrativeFile } from 'src/administrative-file/entities/administrative-file.entity';
import { Group } from 'src/group/entities/group.entity';
import { Potfolio } from 'src/potfolio/entities/potfolio.entity';
import { Subject } from 'src/subject/entities/subject.entity';
import {
  Column,
  Entity,
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

  @Column({ nullable: true })
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

  @OneToMany(() => Subject, (subject) => subject.teacher)
  subject?: Subject[];

  @ManyToMany(() => Group, (groups) => groups.students)
  groups: Group[];

  @OneToMany(() => Potfolio, (portfolio) => portfolio.student)
  portfolio?: Potfolio[];
}
