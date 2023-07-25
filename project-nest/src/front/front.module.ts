import { Module } from '@nestjs/common';
import { FrontService } from './front.service';
import { FrontController } from './front.controller';

@Module({
  controllers: [FrontController],
  providers: [FrontService],
})
export class FrontModule {}
