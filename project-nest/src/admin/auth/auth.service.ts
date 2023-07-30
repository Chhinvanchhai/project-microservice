/* eslint-disable prettier/prettier */

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { DefaultResponse } from 'src/shared/response';
@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private jwtService: JwtService) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.validate(email, pass);
    console.log(user);

    if (user == null) {
      return DefaultResponse.responseFailed({message: "Email or password incorrect!"});;
    }
    const payload = { sub: user.id, email: user.email };
    return {
      token: await this.jwtService.signAsync(payload),
      user: payload
    };
  }
}