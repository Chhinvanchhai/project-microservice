import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { FilesModule } from '../files/files.module';
import { Category } from '../category/entities/category.entity';

@Module({
    controllers: [ProductsController],
    providers: [ProductsService],
    imports: [TypeOrmModule.forFeature([Product, Category]), FilesModule],
    exports: [ProductsService],
})
export class ProductsModule {}
