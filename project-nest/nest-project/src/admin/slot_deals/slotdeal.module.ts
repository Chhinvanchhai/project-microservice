/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { slot_deals } from "../entity/slot_deals.entity";
import { SlotDealsController } from "./slotdeal.controller";
import { slotDealService } from "./slotdeal.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([slot_deals])
  ],
  controllers: [SlotDealsController],
  providers: [slotDealService],
})
export class SlotDealModule {}
