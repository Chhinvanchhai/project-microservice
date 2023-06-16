/* eslint-disable prettier/prettier */
import { Customers } from './customers.entity';
import { Controller, Get } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('admin')
export class CustomerController {
  constructor(private readonly customersService: CustomersService) {}

  @Get('customers')
  getUser(): Promise<Customers[]> {
    return this.customersService.getUser();
  }
  
  @Get('customers/profile')
  getProfile(): string {
    return this.customersService.getProfile();
  }
  
  @Get('customers/history')
  getHistory(): string {
    return this.customersService.getHistory();
  }
}
