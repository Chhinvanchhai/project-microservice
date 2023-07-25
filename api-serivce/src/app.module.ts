import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ANALYTICS',
        transport: Transport.REDIS,
        options: { port: 6379, host: 'localhost' },
      },
      {
        name: 'PROJECT',
        transport: Transport.REDIS,
        options: { port: 6379, host: '127.0.0.1' },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
