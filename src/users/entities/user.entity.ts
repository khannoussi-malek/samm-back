// user.entity.ts
import { AdministrativeFile } from 'src/administrative-file/entities/administrative-file.entity';
import { Departement } from 'src/departement/entities/departement.entity';
import { Potfolio } from 'src/potfolio/entities/potfolio.entity';
import { Subject } from 'src/subject/entities/subject.entity';
import { TeacherSchedule } from 'src/teacher-schedule/entities/teacher-schedule.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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
  subject: Subject[]

  @OneToMany(() => AdministrativeFile, (administrativeFile) => administrativeFile.student)
  administrativeFile: AdministrativeFile[];

  @OneToMany(() => Potfolio, (portfolio) => portfolio.student)
  portfolio: Potfolio[];

  @OneToOne(() => TeacherSchedule)
  @JoinColumn()
  teacherSchedule: TeacherSchedule;

  @OneToOne(() => Departement)
  @JoinColumn()
  department?: Departement;

  


}

