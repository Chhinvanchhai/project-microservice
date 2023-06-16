/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersService } from './customers.service';
import { CustomerController } from './customers.controller';
import { Customers } from './customers.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Customers])
  ],
  controllers: [CustomerController],
  providers: [CustomersService],
})
export class CustomersModule {}
