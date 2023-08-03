import { Product } from 'src/admin/products/entities/product.entity';
import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    JoinColumn,
} from 'typeorm';

@Entity({ name: 'product_media' })
export class ProductMedia {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: false })
    product_id: number;
    @Column({ nullable: true })
    order: number;
    @Column({ nullable: true })
    name: string;
    @Column({ nullable: true })
    type: string;
    @Column({ nullable: true })
    path: string;
    @Column({ nullable: true })
    created_at: string;
    @Column({ nullable: true })
    updated_at: string;
    @ManyToOne(() => Product, (product: Product) => product.id)
    @JoinColumn({ name: 'product_id' })
    product: Product[];
}
