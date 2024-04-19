import { IsNotEmpty, IsString, MaxLength, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateMovieDto {

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    @ApiProperty({ required: false })
    readonly id: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly categoryId: string;

    @IsNotEmpty()
    @ApiProperty({ enum: ['OnGoing', 'UpComing', 'Finished'] })
    readonly status: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly totalEpisode: Number;

    @IsNotEmpty()
    @ApiProperty()
    readonly releasedEpisode: Number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly description: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly release_Date: string;

    @IsNotEmpty()
    @ApiProperty({ format: 'binary' })
    readonly image: string;

}

export class SearchMovieDto {
    @IsString()
    @ApiProperty({ required: false })
    @IsOptional()
    readonly name: string;
}

export class dateFilterDto {
    @IsString()
    @ApiProperty({ required: false })
    @IsOptional()
    readonly day: number;
}