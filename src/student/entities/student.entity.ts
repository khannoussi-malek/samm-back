import { User } from "src/users/entities/user.entity"
import { Column, Entity } from "typeorm";

@Entity()
export class Student extends User{
    @Column()
    NumInscrit:string;
    @Column()
    grade:string;

}
