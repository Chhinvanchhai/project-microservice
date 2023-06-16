/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
// import { Customers } from '../customers/customers.entity';

@Entity({ name: 'slot_deals' })
export class slot_deals {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  booking_id: string;

  @Column()
  order_id: string;

  @Column()
  deal_id: string;

  @Column()
  slot_id: number;

  @Column()
  amount: string;

  @Column()
  status: string;

  @Column()
  is_bot: string;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;

  @Column()
  deleted_at: string;

  // @ManyToOne (() => Customers, (customers: Customers) => customers.id)
  // @JoinColumn({ name: "customer_id" })
  // customers: Customers[];

}