import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { User } from "src/users/entities/user.entity";

export class CreateStudentDto extends CreateUserDto {

    @IsNotEmpty()
    @ApiProperty()
    NumInscrit:string;
    
    @IsNotEmpty()
    @ApiProperty()
    grade:string;
}
