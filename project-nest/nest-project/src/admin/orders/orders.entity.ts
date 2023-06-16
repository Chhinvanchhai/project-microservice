/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne  } from 'typeorm';
import { Customers } from '../customers/customers.entity';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer_id: number;

  @Column()
  order_id: string;

  @Column()
  total_amount: string;

  @ManyToOne (() => Customers, (customers: Customers) => customers.id)
  customers: Customers[];

}