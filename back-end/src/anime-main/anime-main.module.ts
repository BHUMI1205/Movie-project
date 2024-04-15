import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AnimeMainController } from './anime-main.controller';
import { AnimeMainService } from './anime-main.service';
import { Movie, MovieSchema } from './entity/anime.entity';
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot()

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
    JwtModule.register({
      secret: process.env.JWT_SEC,
      signOptions: { expiresIn: '1h' },
    })
  ],
  controllers: [AnimeMainController],
  providers: [AnimeMainService]
})
export class AnimeMainModule { }

