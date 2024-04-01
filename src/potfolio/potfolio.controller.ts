import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PotfolioService } from './potfolio.service';
import { CreatePotfolioDto } from './dto/create-potfolio.dto';
import { UpdatePotfolioDto } from './dto/update-potfolio.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('portfolios')
@Controller('portfolios')
export class PotfolioController {
  constructor(private readonly potfolioService: PotfolioService) {}

  @Post()
  create(@Body() createPotfolioDto: CreatePotfolioDto) {
    return this.potfolioService.create(createPotfolioDto);
  }

  @Get()
  findAll() {
    return this.potfolioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.potfolioService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePotfolioDto: UpdatePotfolioDto,
  ) {
    return this.potfolioService.update(+id, updatePotfolioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.potfolioService.remove(+id);
  }
}
