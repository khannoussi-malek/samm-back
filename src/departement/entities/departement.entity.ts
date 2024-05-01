import { Major } from 'src/major/entities/major.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Departement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToOne(() => User)
  @JoinColumn()
  headOfDepartment: User;

  @Column({ nullable: true })
  headOfDepartmentId: number;

  @ManyToMany((type) => User, (users) => users.id)
  @JoinTable({
    name: 'departement_teaching',
    joinColumn: { name: 'departement_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' },
  })
  teatching?: User[];

  @OneToMany(() => Major, (major) => major.departement, { onDelete: 'CASCADE' })
  majors?: Major[];
}
