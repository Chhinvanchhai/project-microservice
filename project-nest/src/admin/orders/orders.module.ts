/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from '../entity/orders.entity';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Orders])
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
