import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { AnimeMainService } from './anime-main.service';
import { Movie, MovieSchema } from './entity/anime.entity';
import { Category, CategorySchema } from '../anime-category/entity/category.entity';
import { AnimeMainController } from './anime-main.controller';


describe('AnimeMainService', () => {
  let service: AnimeMainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }, { name: Category.name, schema: CategorySchema }]),
        MongooseModule.forRoot('mongodb://localhost:27017/Movie_Project'),
      ],
      controllers: [AnimeMainController],
      providers: [AnimeMainService, JwtService],
    }).compile();

    service = module.get<AnimeMainService>(AnimeMainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
