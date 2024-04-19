import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AnimeCategoryModule } from './anime-category/anime-category.module';
import { AnimeMainModule } from './anime-main/anime-main.module';
import { LoggerMiddleware } from './logger.middleware';

ConfigModule.forRoot()

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/Movie_Project'),
  JwtModule.register({
    secret: process.env.JWT_SEC,
    signOptions: { expiresIn: '1h' },
  }),
    UserModule,
    AnimeMainModule,
    AnimeCategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
