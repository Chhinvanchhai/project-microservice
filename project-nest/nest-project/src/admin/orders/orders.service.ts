/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from '../entity/orders.entity';
@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private ordersRepository: Repository<Orders>,
  ) {}

  getUser(): Promise<Orders[]> {
    return this.ordersRepository.find(
      {
        relations: {
          customers: true,
      }
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
