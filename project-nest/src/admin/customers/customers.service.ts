/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customers } from './customers.entity';
@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customers)
    private customersRepository: Repository<Customers>,
  ) {}

  getUser(): Promise<Customers[]> {
    const page = 1; // the current page number
    const rowsPerPage = 10; // the number of rows per page
    const skip = (page - 1) * rowsPerPage; 
    return this.customersRepository.find(
      {
        relations:{
          orders: true
        },
        skip: skip,
        take: rowsPerPage
      }
    );
  }

  getProfile(): string {
    return 'Profile page!';
  }

  getHistory(): string {
    return 'History page';
  } 
}
