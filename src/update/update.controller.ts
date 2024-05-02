import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
  NotFoundException
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateUpdateDto } from './dto/update-update.dto';
import { UpdateService } from './update.service';
import * as path from 'path';
import { Response } from 'express';
import * as fs from 'fs';

/*
type File = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
};
*/

@Controller('update')
export class UpdateController {
  constructor(private readonly updateService: UpdateService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './uploads',
    }),
  )
  create(@UploadedFile() file: Express.Multer.File) {
    return this.updateService.create(file);
  }

  @Get()
  findAll() {
    return this.updateService.findAll();
  }


  @Get(':id')
async getFileById(@Param('id') id: number, @Res() res: Response) {
  const file = await this.updateService.getFileById(id);

  if (!file) {
    throw new NotFoundException('File not found');
  }


  res.set('Content-Type', file.mimetype);
  return res.sendFile(file.filename, { root: './uploads' });
}
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUpdateDto: UpdateUpdateDto) {
    return this.updateService.update(+id, updateUpdateDto);
  }

  @Delete(':id')
  async deleteFileById(@Param('id') id: number) {
    const file = await this.updateService.getFileById(id);
  
    if (!file) {
      throw new NotFoundException('File not found');
    }
  
    await this.updateService.deleteFile(file);
    return { message: 'File deleted successfully' };
  }
  
}
