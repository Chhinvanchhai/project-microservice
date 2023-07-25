/* eslint-disable prettier/prettier */
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './create-user-request.dto';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user-envent';

@Injectable()
export class AppService {
  private readonly users: any = [];
  constructor(
    @Inject('ANALYTICS') private readonly communicationService: ClientProxy,
    @Inject('PROJECT') private readonly projectMircoService: ClientProxy
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
  
  createUser(createUserRequest: CreateUserRequest) {
    this.users.push(createUserRequest);
    console.log('api gateways======')
    this.projectMircoService.emit('create_project', new CreateUserEvent(createUserRequest.name));
    this.communicationService.emit('create_user', new CreateUserEvent(createUserRequest.name))
    return createUserRequest;
  }
}
