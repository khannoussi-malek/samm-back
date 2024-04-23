import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: 0 })
  coef: number;

  @Column({ default: '' })
  type: string;

  @ManyToOne(() => User, (user) => user.subject)
  teacher: User;
}
