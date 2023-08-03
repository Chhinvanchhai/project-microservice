/* eslint-disable prettier/prettier */
import { Optional } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';
import { Category } from 'src/admin/category/entities/category.entity';
import { ProductMedia } from 'src/admin/files/entities/product.media.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, JoinTable} from 'typeorm';
interface Image {
  path: string;
  name: string;
}
@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @IsNotEmpty()
  @Column()
  subcategory_id: number;

  @Column()
  @IsNotEmpty()
  category_id: number;
 
  @Column()
  @IsNotEmpty()
  description: string;

  @Column()
  @IsNotEmpty()
  price: number;

  @Column()
  @IsNotEmpty()
  stock_quantity: number;

  @Column({ default: true})
  created_at: Date = new Date();

  @Column()

  updated_at: Date;
  @OneToMany(()=> ProductMedia, (productMedia: ProductMedia) =>  productMedia.product)
  images: ProductMedia[];
  
  @ManyToOne(() => Category, (category: Category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}