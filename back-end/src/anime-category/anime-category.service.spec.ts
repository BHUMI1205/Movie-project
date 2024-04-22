import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimeCategoryService } from './anime-category.service';
import { AnimeCategoryController } from './anime-category.controller';
import { Category, CategorySchema } from './entity/category.entity';


describe('AnimeCategoryService', () => {
  let service: AnimeCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/nest_basic'),
        MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
    ],
    controllers: [AnimeCategoryController],
    providers: [AnimeCategoryService]
    }).compile();

    service = module.get<AnimeCategoryService>(AnimeCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
