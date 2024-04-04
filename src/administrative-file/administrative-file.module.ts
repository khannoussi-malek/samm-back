import { Module } from '@nestjs/common';
import { AdministrativeFileService } from './administrative-file.service';
import { AdministrativeFileController } from './administrative-file.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministrativeFile } from './entities/administrative-file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdministrativeFile])],
  controllers: [AdministrativeFileController],
  providers: [AdministrativeFileService]
})
export class AdministrativeFileModule {}
