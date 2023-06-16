/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { Orders } from '../entity/orders.entity';
import { OrdersService } from './orders.service';

@Controller('admin')
export class OrdersController {
  constructor(private readonly orderssService: OrdersService) {}

  @Get('orders')
  getUser(): Promise<Orders[]> {
    return this.orderssService.getUser();
  }
  
  @Get('orders/profile')
  getProfile(): string {
    return this.orderssService.getProfile();
  }
  
  @Get('orders/history')
  getHistory(): string {
    return this.orderssService.getHistory();
  }
}
