import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class TeacherSchedule {
    @PrimaryGeneratedColumn()
    id: number;
  
   
    @Column({default: 0.0})
    filename: string;
   
  }
  
  

