import { Body, Controller, Delete, Get, Param, Post, Patch, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateMovieDto, SearchMovieDto, dateFilterDto } from './dto/create-anime.dto';
import { UpdateMovieDto, } from './dto/update-anime.dto';
import { AnimeMainService } from './anime-main.service';


@ApiTags('Movie-Details')
@Controller('anime-main')
export class AnimeMainController {

    constructor(private readonly animeMainService: AnimeMainService) { }

    @ApiOperation({ summary: 'Get all Move Detils' })
    @Get('movie/all')
    async getAll(@Query() searchMovieDto: SearchMovieDto) {
        return await this.animeMainService.getAll(searchMovieDto)
    }

    @ApiOperation({ summary: 'Get Movie Details' })
    @Get('movie')
    async get(@Query() searchMovieDto: SearchMovieDto) {
        return await this.animeMainService.get(searchMovieDto)
    }

    @ApiOperation({ summary: 'Get Movie Details' })
    @Get('movie/getOne')
    async getOne(@Query('id') id: string) {
        return await this.animeMainService.getOne(id)
    }

    @Post('movie')
    @ApiOperation({ summary: 'Add Movie Details' })
    @ApiBody({ type: CreateMovieDto })
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(FileInterceptor('image'))
    async add(@Body() createMovieDto: CreateMovieDto, @UploadedFile() imageData: Express.Multer.File) {
        let imagedata = imageData == undefined ? createMovieDto.image : imageData;
        return await this.animeMainService.create(createMovieDto, imagedata)
    }

    @Patch('movie')
    @ApiOperation({ summary: 'Update Movie Details' })
    @ApiBody({ type: UpdateMovieDto, required: false })
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(FileInterceptor('image'))
    async update(@Query('id') id: string, @Body() updateMovieDto: UpdateMovieDto, @UploadedFile() imageData: Express.Multer.File) {
        if (!id) {
            id = updateMovieDto.id
        }
        return await this.animeMainService.update(updateMovieDto, id, imageData)
    }

    @ApiOperation({ summary: 'Remove Movie Details' })
    @Delete('movie')
    async remove(@Query('id') id: string) {
        return await this.animeMainService.remove(id)
    }

    @ApiOperation({ summary: 'Filter By Category' })
    @Get('movie/ByCategory')
    async filter(@Query('id') categoryId: string) {
        return await this.animeMainService.filterByCategory(categoryId)
    }

    @ApiOperation({ summary: 'Filter By Date' })
    @Get('filterByDate')
    async dateFilter(@Query() dateFilterDto: dateFilterDto) {
        return await this.animeMainService.dateFilter(dateFilterDto)
    }
}