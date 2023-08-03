import { Product } from 'src/admin/products/entities/product.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    JoinColumn,
} from 'typeorm';
@Entity({ name: 'categories' })
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: number;

    @Column()
    description: string;

    @Column({ default: true })
    created_at: Date = new Date();

    @Column()
    updated_at: Date;

    @OneToMany(() => Product, (product: Product) => product.category)
    products: Product[];
}
