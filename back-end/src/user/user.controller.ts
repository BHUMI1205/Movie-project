import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiBody, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('users')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @ApiOperation({ summary: 'Register user' })
    @ApiBody({ type: CreateUserDto })
    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return await this.userService.register(createUserDto);
    }

    @ApiOperation({ summary: 'Login User' })
    @ApiBody({ type: LoginUserDto })
    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto) {
        return await this.userService.login(loginUserDto)
    }
}
