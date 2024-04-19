import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AnimeMainController } from './anime-main.controller';
import { AnimeMainService } from './anime-main.service';
import { Movie, MovieSchema } from './entity/anime.entity';
import { ConfigModule } from '@nestjs/config';
import { Category, CategorySchema } from 'src/anime-category/entity/category.entity';
ConfigModule.forRoot()

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema },{ name: Category.name, schema: CategorySchema }]),
    JwtModule.register({
      secret: process.env.JWT_SEC,
      signOptions: { expiresIn: '1h' },
    })
  ],
  controllers: [AnimeMainController],
  providers: [AnimeMainService]
})
export class AnimeMainModule { }

