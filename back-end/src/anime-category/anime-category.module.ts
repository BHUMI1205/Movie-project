import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimeCategoryService } from './anime-category.service';
import { AnimeCategoryController } from './anime-category.controller';
import { Category, CategorySchema } from './entity/category.entity';
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot()

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
        JwtModule.register({
            secret: process.env.JWT_SEC,
            signOptions: { expiresIn: '1h' },
        })
    ],
    controllers: [AnimeCategoryController],
    providers: [AnimeCategoryService]
})
export class AnimeCategoryModule { }