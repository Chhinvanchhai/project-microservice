/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { UserService } from './admin/user/user.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly userService: UserService) {}

  @Get()
  getHello() {
    console.log(process.env.NODE_ENV);
    return this.appService.getHello();
  }

  @EventPattern('create_project')
  crreatProject(@Payload() data) {
    console.log("get event from api gateway", data);
    // return this.userService.create(d.email, d.password);
    // return this.appService.createProjectEventHandle(d)
  }
}
