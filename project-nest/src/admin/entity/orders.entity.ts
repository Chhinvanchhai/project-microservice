/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
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
  @JoinColumn({ name: "customer_id" })
  customers: Customers[];

}