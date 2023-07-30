/* eslint-disable prettier/prettier */
import { Injectable, Request } from '@nestjs/common';
import { Users } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { DefaultResponse } from 'src/shared/response';

@Injectable()
export class UserService {
    private readonly users = [
        {
            userId: 1,
            username: 'john',
            email: 'admin@mail.com',
            password: 'password',
        },
        {
            userId: 2,
            username: 'maria',
            email: 'user@mail.com',
            password: 'guess',
        },
    ];

  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private jwtService: JwtService,
  ) {}

  getUser(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async login(user: Users): Promise<{ access_token: string }> {
      const payload = { email: user.email, sub: user.password };
    //   console.log(payload, '===payload');
    //   console.log('===env====', process.env.JWT_KEY)
      return {
          access_token: await this.jwtService.sign(payload),
      };
  }

  async verify(token: any): Promise<Users | any> {
      try {
          const payload = this.jwtService.verify(token);
          return this.usersRepository.findOne(payload.sub);
      } catch (error) {
          return DefaultResponse.responseFailed({message: "Email or password incorrect!"});
      }
  }
  
  async create(createUserDto: CreateUserDto): Promise<Users> {
      const user = new Users();
      user.email = createUserDto.email;
      user.name = createUserDto.email;
      user.password = await bcrypt.hash(createUserDto.password, 10);
      return this.usersRepository.save(user);
  }

  async validate(email: string, password: string): Promise<Users | null> {
      const user = await this.usersRepository.findOne({ where: { email } });
      if (user && (await bcrypt.compare(password, user.password))) {
          return user;
      }
      return null;
  }

  async findOne(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }

  
}
