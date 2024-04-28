import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/users/users.service';
import { DepartementController } from './departement.controller';
import { DepartementService } from './departement.service';
import { Departement } from './entities/departement.entity';
import { UserModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Departement]), UserModule],
  controllers: [DepartementController],
  providers: [DepartementService],
})
export class DepartementModule {}
