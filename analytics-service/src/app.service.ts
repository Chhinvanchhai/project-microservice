/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user-envent';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  handleEventCreateUser(data: CreateUserEvent){
    console.log('analytics - from api==', data);
  }
}
