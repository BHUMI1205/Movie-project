import { IsNotEmpty, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    readonly email: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly password: string;

}