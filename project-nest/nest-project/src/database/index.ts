/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../admin/user/user.entity'
import { Customers } from 'src/admin/customers/customers.entity';
import { Orders } from 'src/admin/entity/orders.entity';
import { slot_deals } from 'src/admin/entity/slot_deals.entity';
import { Product } from 'src/admin/products/entities/product.entity';


export default function MysqlConnection (){
 return  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'one_dollar',
    entities: [Users, Customers, Orders, slot_deals, Product],
    // synchronize: true,
    
  })
}
