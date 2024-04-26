import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { TeacherScheduleService } from './teacher-schedule.service';

import { UpdateTeacherScheduleDto } from './dto/update-teacher-schedule.dto';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
@ApiTags('teacher-schedules')
@Controller('teacher-schedules')
export class TeacherScheduleController {
  constructor(
    private readonly teacherScheduleService: TeacherScheduleService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<void> {
    await this.teacherScheduleService.uploadFile(
      file.originalname,
      file.buffer,
    );
  }
  @Get('download/:filename')
  async downloadFile(
    @Param('filename') filename: string,
    @Res() res: Response,
  ): Promise<void> {
    const file = await this.teacherScheduleService.downloadFile(filename);
    res.setHeader('Content-Type', 'application/octet-stream'); // Vous pouvez changer application/octet-stream au type MIME approprié pour votre fichier
    res.setHeader('Content-Disposition', `inline; filename=${file.filename}`);
    res.send(file.data);
  }

  @Get()
  findAll() {
    return this.teacherScheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherScheduleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTeacherScheduleDto: UpdateTeacherScheduleDto,
  ) {
    return this.teacherScheduleService.update(+id, updateTeacherScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherScheduleService.remove(+id);
  }
}
