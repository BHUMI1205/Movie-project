import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger';
import { AnimeCategoryService } from './anime-category.service';
import { CreateCategoryDto, SerachCategoryDto } from './dto/create-category.dto';

@ApiTags('Anime-main')
@Controller('anime-category')
export class AnimeCategoryController {
    constructor(private readonly animeCategoryService: AnimeCategoryService) { }

    @ApiOperation({ summary: 'Get Movie Details' })
    @Get('category')
    async get() {
        return await this.animeCategoryService.get()
    }

    @ApiOperation({ summary: 'Add Movie Details' })
    @ApiBody({ type: CreateCategoryDto })
    @Post('category')
    async add(@Body() createCategoryDto: CreateCategoryDto) {
        return await this.animeCategoryService.add(createCategoryDto)
    }

    @ApiOperation({ summary: 'Remove Category' })
    @Delete('category/:id')
    async remove(@Param('id') categoryId: string) {
        return this.animeCategoryService.remove(categoryId)
    }

    @ApiOperation({ summary: 'Search Category' })
    @Post('category/search')
    async search(@Body() serachCategoryDto: SerachCategoryDto) {
        return await this.animeCategoryService.search(serachCategoryDto)
    }
}