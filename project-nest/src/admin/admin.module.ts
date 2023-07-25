/* eslint-disable prettier/prettier */

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AdminMiddleware } from './admin.middleware';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { SlotDealModule } from './slot_deals/slotdeal.module';
import { ProductsModule } from './products/products.module';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { BullModule } from '@nestjs/bull';
import { SendComsumer } from './send.consumer';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './task.service';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { InventoryModule } from './inventory/inventory.module';
import { FilesModule } from './files/files.module';


@Module({
  imports: [
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'send',
    }),
    UserModule,    
    AuthModule,
    CustomersModule, 
    OrdersModule,
    SlotDealModule,
    ProductsModule,
    SubCategoryModule,
    InventoryModule,
    FilesModule,
  ],
  controllers: [AdminController],
  providers: [AdminService, SendComsumer, TasksService],
})
export class AdminModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(AdminMiddleware).forRoutes('admin')
  }
}
