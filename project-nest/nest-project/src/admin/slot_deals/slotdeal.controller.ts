/* eslint-disable prettier/prettier */
import { Query } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { slot_deals } from '../entity/slot_deals.entity';
import { slotDealService } from './slotdeal.service';

@Controller('admin')
export class SlotDealsController {
  constructor(private readonly slotDealsrsService: slotDealService) {}

  @Get('slotdeal')
  getSlotDeal(): Promise<slot_deals[]> {
    return this.slotDealsrsService.getSlotDeal();
  }
  @Get('slotdeal/pagination')
  pagination(@Query() query): Promise<slot_deals[]> {
    return this.slotDealsrsService.pagination(query);
  }

}
