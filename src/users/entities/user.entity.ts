// user.entity.ts
import { Subject } from 'src/subject/entities/subject.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
  passport:string;

  @Column({ nullable: true })
  role:'teacher' | 'Student'|'Admin';

  @OneToMany(() => Subject, (subject) => subject.teacher)
  subject: Subject[]
 
}

