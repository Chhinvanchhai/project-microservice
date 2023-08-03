import { IsNotEmpty } from 'class-validator';

interface Image {
    path: string;
    name: string;
}
export class CreateProductDto {
    name: string;

    @IsNotEmpty()
    subcategory_id: number;

    @IsNotEmpty()
    category_id: number;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    stock_quantity: number;
}
