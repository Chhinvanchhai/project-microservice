/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

import { AdminService } from './admin.service';
import { TasksService } from './task.service';

@Controller()
export class AdminController {
  constructor(private adminService: AdminService, private taskService: TasksService) {}

  @Get('queu/send')
  send() {
    return this.adminService.send();
  }
  // @Get('work/start')
  // work() {
  //   return this.taskService.handleCron();
  // }

}
