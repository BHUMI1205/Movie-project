import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from './entity/user.entity';
import { JwtService } from '@nestjs/jwt';


describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/Movie_Project'),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
      ],
      controllers: [UserController],
      providers: [UserService,JwtService]
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
