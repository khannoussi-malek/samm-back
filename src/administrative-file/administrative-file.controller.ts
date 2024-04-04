import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministrativeFileService } from './administrative-file.service';
import { CreateAdministrativeFileDto } from './dto/create-administrative-file.dto';
import { UpdateAdministrativeFileDto } from './dto/update-administrative-file.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('administrative-files')
@Controller('administrative-files')
export class AdministrativeFileController {
  constructor(private readonly administrativeFileService: AdministrativeFileService) {}

  @Post()
  create(@Body() createAdministrativeFileDto: CreateAdministrativeFileDto) {
    return this.administrativeFileService.create(createAdministrativeFileDto);
  }

  @Get()
  findAll() {
    return this.administrativeFileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administrativeFileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdministrativeFileDto: UpdateAdministrativeFileDto) {
    return this.administrativeFileService.update(+id, updateAdministrativeFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.administrativeFileService.remove(+id);
  }
}
