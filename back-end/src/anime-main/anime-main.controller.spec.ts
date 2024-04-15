import { Test, TestingModule } from '@nestjs/testing';
import { AnimeMainController } from './anime-main.controller';

describe('AnimeMainController', () => {
  let controller: AnimeMainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimeMainController],
    }).compile();

    controller = module.get<AnimeMainController>(AnimeMainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
