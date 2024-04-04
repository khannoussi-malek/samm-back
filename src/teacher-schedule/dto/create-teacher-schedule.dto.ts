import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { isUint8Array } from "util/types";


export class CreateTeacherScheduleDto {
    @IsString()
    
    @ApiProperty()
    filename:string
  
   
   

    
    
  
  
}
