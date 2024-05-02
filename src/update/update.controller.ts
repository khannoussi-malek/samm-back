import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateUpdateDto } from './dto/update-update.dto';
import { UpdateService } from './update.service';

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
  findOne(@Param('id') id: string) {
    return this.updateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUpdateDto: UpdateUpdateDto) {
    return this.updateService.update(+id, updateUpdateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.updateService.remove(+id);
  }
}
