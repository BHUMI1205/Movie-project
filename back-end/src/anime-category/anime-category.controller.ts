import { Body, Controller, Get, Post, Patch, Delete, Param, Query } from '@nestjs/common';
import { ApiTags, ApiBody, ApiOperation, ApiConsumes } from '@nestjs/swagger';
import { AnimeCategoryService } from './anime-category.service';
import { CreateCategoryDto, SerachCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('Anime-main')
@Controller('anime-category')
export class AnimeCategoryController {
    constructor(private readonly animeCategoryService: AnimeCategoryService) { }

    @ApiOperation({ summary: 'Get category Details' })
    @Get('category')
    async get() {
        return await this.animeCategoryService.get()
    }

    @ApiOperation({ summary: 'Get category Details' })
    @Get('category/getOne')
    async getOne(@Query('id') id: string) {
        return await this.animeCategoryService.getOne(id)
    }

    @ApiOperation({ summary: 'Add category Details' })
    @ApiBody({ type: CreateCategoryDto })
    @Post('category')
    async add(@Body() createCategoryDto: CreateCategoryDto) {
        return await this.animeCategoryService.add(createCategoryDto)
    }

    @ApiOperation({ summary: 'Update category Detail' })
    @ApiBody({ type: UpdateCategoryDto, required: false })
    @Patch('category')
    async update(@Query('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
                
        let Id = id == undefined ? updateCategoryDto.id : id;
         
        return await this.animeCategoryService.update(updateCategoryDto, Id)
    }

    @ApiOperation({ summary: 'Remove Category' }) 
    @Delete('category')
    async remove(@Query('id') categoryId: string) {
        return await this.animeCategoryService.remove(categoryId)
    }

    @ApiOperation({ summary: 'Search Category' }) 
    @Post('category/search')
    async search(@Body() serachCategoryDto: SerachCategoryDto) {
        return await this.animeCategoryService.search(serachCategoryDto)
    }
}