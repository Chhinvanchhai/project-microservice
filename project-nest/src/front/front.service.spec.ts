import { Test, TestingModule } from '@nestjs/testing';
import { FrontService } from './front.service';

describe('FrontService', () => {
  let service: FrontService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrontService],
    }).compile();

    service = module.get<FrontService>(FrontService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
