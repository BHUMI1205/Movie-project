import { HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimeCategoryController } from './anime-category.controller';
import { AnimeCategoryService } from './anime-category.service';
import { Category, CategorySchema } from './entity/category.entity';

describe('AnimeCategoryController', () => {
  let controller: AnimeCategoryController;
  let service: AnimeCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/Movie_Project'),
        MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
      ],
      controllers: [AnimeCategoryController],
      providers: [AnimeCategoryService]
    }).compile();

    controller = module.get<AnimeCategoryController>(AnimeCategoryController);
    service = module.get<AnimeCategoryService>(AnimeCategoryService);

  });

  it('should be defined', async () => {
    let result = {
      status: HttpStatus.CREATED,
      data: [],
      message: 'Category data get Successfully'
    }
    jest.spyOn(service, 'get').mockResolvedValue(result);

    const response = await controller.get();

    expect(response).toEqual(result);
  });

}); 