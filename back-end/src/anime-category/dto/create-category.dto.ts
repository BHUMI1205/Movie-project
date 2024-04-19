import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {

    @IsOptional()
    @ApiProperty()
    readonly id: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;

    @IsNotEmpty()
    @ApiProperty({ enum: ['Active', 'Inactive'] })
    readonly status: string;

}

export class SerachCategoryDto {
    @IsString()
    @ApiProperty()
    readonly name: string;
}