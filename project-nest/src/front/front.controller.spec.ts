import { Test, TestingModule } from '@nestjs/testing';
import { FrontController } from './front.controller';
import { FrontService } from './front.service';

describe('FrontController', () => {
  let controller: FrontController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrontController],
      providers: [FrontService],
    }).compile();

    controller = module.get<FrontController>(FrontController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
