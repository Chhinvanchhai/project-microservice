import { Injectable } from '@nestjs/common';
import { CreateFrontDto } from './dto/create-front.dto';
import { UpdateFrontDto } from './dto/update-front.dto';

@Injectable()
export class FrontService {
  create(createFrontDto: CreateFrontDto) {
    return 'This action adds a new front';
  }

  findAll() {
    return `This action returns all front`;
  }

  findOne(id: number) {
    return `This action returns a #${id} front`;
  }

  update(id: number, updateFrontDto: UpdateFrontDto) {
    return `This action updates a #${id} front`;
  }

  remove(id: number) {
    return `This action removes a #${id} front`;
  }
}
