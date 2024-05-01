import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/users/users.module';
import { DepartementController } from './departement.controller';
import { DepartementService } from './departement.service';
import { Departement } from './entities/departement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Departement]), UserModule],
  controllers: [DepartementController],
  providers: [DepartementService],
})
export class DepartementModule {}
