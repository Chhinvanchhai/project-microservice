/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany  } from 'typeorm';
import { Orders } from '../entity/orders.entity';

@Entity()
export class Customers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  member_ID: string;

  @Column()
  first_name: string;

  @Column()
  phone_number: string;

  @OneToMany (() => Orders, (orders: Orders) => orders.customers)
  orders: Orders[];
}