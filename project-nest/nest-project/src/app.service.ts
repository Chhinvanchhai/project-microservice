import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  createProjectEventHandle(data) {
    console.log('micor payload===', data);
  }
}
