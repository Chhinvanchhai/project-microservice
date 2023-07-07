/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Console } from 'console';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productRepository.create(createProductDto);
    return await this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find();
  }

  async pagination(query) {
    console.log(query, 'query');
    let queryString = {};
    const perPage = query.rowsPerPage || 15;
    const page = query.page || 1;
    const sortBy = query.sortBy || 'name';
    const keyword = query.key || '';
    const sortOrder = query.descending == 'true' ? 'asc' : 'desc';

    queryString = {
      skip: page,
      take: perPage,
      where: {
        name: Like(`%${keyword} %`),
      },
      order: {
        [sortBy]: sortOrder,
      },
    };
    if (keyword != '') {
      queryString = {
        where: {
          name: Like(`%${keyword} %`),
        },
        order: {
          [sortBy]: sortOrder,
        },
      };
    }

    const result = await this.productRepository.find(queryString);
    console.log(result);
    return result;
  }

  findOne(id) {
    console.log('id product: ' + id);
    return this.productRepository.find({ where: { id: id } });
  }

  async update(id, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.find({ where: { id: id } });
    if (product) {
      const updateD = {
        ...product[0],
        ...updateProductDto,
      };
      console.log(updateD);
      return await this.productRepository.save(updateD);
    }
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
