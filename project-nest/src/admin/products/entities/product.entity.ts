/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
// import { Customers } from '../customers/customers.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sub_category_id: number;

  @Column()
  category_id: number;

  @Column()
  sku: string;

  @Column()
  quantity: number;

  @Column()
  slug: string;

  @Column()
  meta_title: string;

  @Column()
  meta_description: string;

  @Column()
  meta_keywords: string;

  @Column()
  views: number;

  // @Column({ nullable: true })
  // media: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

}