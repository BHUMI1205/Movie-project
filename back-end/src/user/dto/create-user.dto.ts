import { IsNotEmpty, IsEmail, IsString, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    @ApiProperty()
    readonly username: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    readonly email: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly password: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly cpassword: string;

    readonly role: string

}