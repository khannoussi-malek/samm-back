import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber,  } from "class-validator";

export class CreateGradeDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    grade: number;
   
}
