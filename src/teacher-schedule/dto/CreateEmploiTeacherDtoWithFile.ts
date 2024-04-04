import { FileInterceptor } from "@nestjs/platform-express";
import { CreateTeacherScheduleDto } from "./create-teacher-schedule.dto";

export class CreateEmploiTeacherDtoWithFile {
    name: string;
    description: string;
    fichier: any;
    
}