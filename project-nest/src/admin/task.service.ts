/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ProductsService } from './products/products.service';

@Injectable()
export class TasksService {
  constructor(private productService: ProductsService) { }
  private readonly logger = new Logger(TasksService.name);

  // @Cron('* * * * * *')
  // async handleCron() {
  //   // const prod = await this.productService.create({
  //   //   name: 'Let be strong as stone and soft as water.',
  //   //   category_id: 1,
  //   //   sku: '1ImO9rIsddt42RnaID9R24qvj',
  //   //   quantity: 10
  //   // });
  //   // console.log(prod);
  //   this.logger.debug('Called when the current second is 45');
  // }
}