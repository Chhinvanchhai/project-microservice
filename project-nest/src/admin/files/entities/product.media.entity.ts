import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product_media' })
export class ProductMedia {
    @PrimaryGeneratedColumn()
    id: number;
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
}
