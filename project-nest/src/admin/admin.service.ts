/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class AdminService {
  constructor(@InjectQueue('send') private sendQueue: Queue, ) {}

  async send() {
    await this.sendQueue.add({
      foo: 'bar',
    },  { delay: 3000 },);
    return 'start working';
  }

  getProfile(): string {
    return 'Profile page!';
  }

  getHistory(): string {
    return 'History page';
  } 

}
