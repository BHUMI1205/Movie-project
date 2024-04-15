import { IsNotEmpty, IsEmail, IsString, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    readonly status: string;

}

export class SerachCategoryDto {
    @IsString()
    @ApiProperty()
    readonly name: string;
}