import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { DefaultResponse } from '../../shared/response';

@Injectable()
export class CustomersService {
    constructor(
        @InjectRepository(Customer)
        private customerRop: Repository<Customer>,
    ) {}

    async create(createCustomerDto: CreateCustomerDto) {
        const result = await this.customerRop.save(createCustomerDto);
        return DefaultResponse.repsonseCreate(result);
    }

    findAll() {
        return `This action returns all customers`;
    }

    findOne(id: number) {
        return `This action returns a #${id} customer`;
    }

    update(id: number, updateCustomerDto: UpdateCustomerDto) {
        return `This action updates a #${id} customer`;
    }

    remove(id: number) {
        return `This action removes a #${id} customer`;
    }
}
