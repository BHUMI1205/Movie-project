import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from './entity/user.entity';
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot()

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: process.env.JWT_SEC,
      signOptions: { expiresIn: '1h' },
    })
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { } 