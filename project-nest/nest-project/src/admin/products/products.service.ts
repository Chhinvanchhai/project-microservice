/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productRepository.create(createProductDto);
    return  await this.productRepository.save(product);
  }

  findAll() {
    return  this.productRepository.find();
  }

  pagination(query) {
    console.log(query, 'query');
    const perPage = query.rowsPerPage || 15;
    const page = query.page ||  1;
    const sortBy = query.sortBy || 'name';
    const sortOrder = query.descending == 'true' ? 'asc' : 'desc';
    return this.productRepository.find(
      {
        skip: page,
        take: perPage,
        where: {
        },
        order: {
          [sortBy]: sortOrder,
        },
      },
    )
  }

  findOne(id) {
    console.log("id product: " + id);
    return this.productRepository.find({where: {id: id}});
  }

  async update(id, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.find({where: {id: id}});
    if (product) {
     const updateD = {
      ...product[0],
      ...updateProductDto
     }
     console.log(updateD);
     return await this.productRepository.save(updateD);
    }
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
