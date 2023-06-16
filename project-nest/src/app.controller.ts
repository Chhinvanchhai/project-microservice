/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { UserService } from './admin/user/user.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('create_project')
  crreatProject(data) {
    const d = {
      email: data.email,
      password: '123456'
    }
    // return this.userService.create(d.email, d.password);
    // return this.appService.createProjectEventHandle(d)
  }
}
