import { Test, TestingModule } from '@nestjs/testing';
import { AnimeMainService } from './anime-main.service';

describe('AnimeMainService', () => {
  let service: AnimeMainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimeMainService],
    }).compile();

    service = module.get<AnimeMainService>(AnimeMainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
