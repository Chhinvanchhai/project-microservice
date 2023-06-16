/* eslint-disable prettier/prettier */
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from './user.entity';
import { UserService } from './user.service';
import { Body, Controller, Get, Post, Request } from '@nestjs/common';

@Controller('admin')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  getUser(): Promise<Users[]> {
    return this.userService.getUser();
  }
  
  @Post('user/login')
  async login(@Request() req) {
    // console.log("====req =======", req.body);
    return this.userService.login(req.body);
}
  
  @Post('user/create')
  create(@Body() createUserDto: CreateUserDto): Promise<Users> {
    console.log("====req =======", createUserDto);
    return this.userService.create(createUserDto);
  }
}
