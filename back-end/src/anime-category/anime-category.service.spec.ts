import { Test, TestingModule } from '@nestjs/testing';
import { AnimeCategoryService } from './anime-category.service';

describe('AnimeCategoryService', () => {
  let service: AnimeCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimeCategoryService],
    }).compile();

    service = module.get<AnimeCategoryService>(AnimeCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
