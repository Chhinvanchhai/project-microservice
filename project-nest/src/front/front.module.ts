import { Module } from '@nestjs/common';
import { FrontService } from './front.service';
import { FrontController } from './front.controller';
import { CustomersModule } from './customers/customers.module';

@Module({
    controllers: [FrontController],
    providers: [FrontService],
    imports: [CustomersModule],
})
export class FrontModule {}
