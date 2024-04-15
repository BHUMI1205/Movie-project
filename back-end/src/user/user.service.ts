import { Injectable, NotFoundException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './entity/user.entity';


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
        private jwtService: JwtService) { }

    async register(createUserDto) {

        if (createUserDto.password !== createUserDto.cpassword) {
            throw new NotFoundException("Passwords do not match");
        }
        const existingUser = await this.userModel.findOne({ email: createUserDto.email });
        if (existingUser) {
            throw new NotFoundException("Email is already registered");
        }

        let salt = 10;
        const hash = await bcrypt.hash(createUserDto.password, salt);

        const newUser = new this.userModel({
            userName: createUserDto.username,
            email: createUserDto.email,
            password: hash
        });
        newUser.save();
        return {
            status: HttpStatus.CREATED,
            data: newUser,
            message: 'Catgory Created Successfully'
        }
    }

    async login(loginUserDto) {
        const existingUser = await this.userModel.findOne({ email: loginUserDto.email });

        if (existingUser) {
            const isMatch = await bcrypt.compare(loginUserDto.password, existingUser.password);
            if (isMatch) {
                const payload = { id: existingUser._id, email: existingUser.email, role: existingUser.role };

                let token = this.jwtService.sign(payload);
                console.log(token);

                return {
                    status: HttpStatus.OK,
                    data: token,
                }
            } else {
                throw new NotFoundException("Password do not match");
            }
        } else {
            throw new NotFoundException("Email do not match");
        }
    }
}
