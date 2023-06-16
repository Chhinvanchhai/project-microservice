/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { slot_deals } from '../entity/slot_deals.entity';
@Injectable()
export class slotDealService {
  constructor(
    @InjectRepository(slot_deals)
    private slotDealRepository: Repository<slot_deals>,
  ) {}

  getSlotDeal(): Promise<slot_deals[]> {
    const page = 1; // the current page number
    const rowsPerPage = 10000; // the number of rows per page
    const skip = (page - 1) * rowsPerPage; 
    return this.slotDealRepository.find(  {
      skip: skip,
      take: rowsPerPage
    });
  }

  pagination(query) {
    const perPage = query.rowsPerPage || 15;
    const page = query.page ||  1;
    const sortBy = query.sortBy || 'name';
    const sortOrder = query.descending == 'true' ? 'asc' : 'desc';
    return this.slotDealRepository.find(
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

}
