import { Test, TestingModule } from '@nestjs/testing';
import { AnimeCategoryController } from './anime-category.controller';

describe('AnimeCategoryController', () => {
  let controller: AnimeCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimeCategoryController],
    }).compile();

    controller = module.get<AnimeCategoryController>(AnimeCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
