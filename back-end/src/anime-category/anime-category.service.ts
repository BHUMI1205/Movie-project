import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './entity/category.entity';

@Injectable()
export class AnimeCategoryService {
    constructor(@InjectModel(Category.name) private categoyModel: Model<CategoryDocument>) { }

    async get() {
        const data = await this.categoyModel.find({})
        return {
            status: HttpStatus.CREATED,
            data: data,
            message: 'Catgory data get Successfully'
        };
    }

    async add(createmoviedto) {
        const category = new this.categoyModel({
            name: createmoviedto.name,
            status: createmoviedto.status
        })
        category.save({})
        return {
            status: HttpStatus.CREATED,
            data: category,
            message: 'Catgory Created Successfully'
        };
    }

    async remove(categoryId) {
        const Category = await this.categoyModel.findByIdAndDelete(categoryId)

        if (!Category) {
            throw new NotFoundException(`CategoryId ${categoryId} not found`);
        } else {
            return {
                status: HttpStatus.OK,
                data: Category,
                message: 'Catgory Deleted Successfully'
            };
        }
    }

    async search(serachCategoryDto) {
        const data = await this.categoyModel.find({ name: { $regex: serachCategoryDto.name, $options: 'i' } })
        return {
            status: HttpStatus.CREATED,
            data: data,
            message: 'Category Found Successfully'
        };
    }
}