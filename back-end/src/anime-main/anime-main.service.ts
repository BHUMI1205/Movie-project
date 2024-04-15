import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as cloudinary from 'cloudinary';
import { Movie, MovieDocument } from './entity/anime.entity';

@Injectable()
export class AnimeMainService {
    constructor(@InjectModel(Movie.name) private moviemodel: Model<MovieDocument>) {

        cloudinary.v2.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
    }

    private uploadImageToCloudinary(fileBuffer: Buffer): Promise<cloudinary.UploadApiResponse> {
        try {
            return new Promise((resolve, reject) => {
                const publicId = Date.now() + Math.floor(Math.random() * 1000000).toString();
                cloudinary.v2.uploader.upload_stream(
                    { public_id: publicId, resource_type: 'auto', folder: 'movie-project/', },
                    (error: cloudinary.UploadApiErrorResponse, result: cloudinary.UploadApiResponse) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(result);
                        }
                    }
                ).end(fileBuffer);
            });
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }

    async getAll(searchMovieDto) {
        let movieData;
        movieData = await this.moviemodel.find({}).limit(8)
            .populate('categoryId', 'name')
            .select('name image release_Date status categoryId releasedEpisode totalEpisode')

        if (searchMovieDto.name != undefined) {
            const data = await this.moviemodel.find({ name: { $regex: searchMovieDto.name, $options: 'i' } })
                .populate('categoryId', 'name')
                .select('name image release_Date status categoryId releasedEpisode totalEpisode')
            if (data.length != 0) {
                movieData = data
            }
        }

        return {
            status: HttpStatus.OK,
            data: movieData,
            message: 'Movie Data Get Successfully'
        };
    }

    async get(searchMovieDto) {

        let movieData;

        const recentData = await this.moviemodel.find({})
            .populate('categoryId', 'name')
            .select('name image release_Date status categoryId releasedEpisode totalEpisode').limit(3).sort({ release_Date: 1 })

        const NewData = await this.moviemodel.find({})
            .populate('categoryId', 'name')
            .select('name image release_Date status categoryId releasedEpisode totalEpisode').limit(3).sort({ release_Date: -1 })

        movieData = await this.moviemodel.find({})
            .populate('categoryId', 'name')
            .select('name image release_Date status categoryId releasedEpisode totalEpisode').limit(3)
        if (searchMovieDto.name != undefined) {
            const data = await this.moviemodel.find({ name: { $regex: searchMovieDto.name, $options: 'i' } })
                .populate('categoryId', 'name')
                .select('name image release_Date status categoryId releasedEpisode totalEpisode').limit(3)

            if (data.length != 0) {
                movieData = data
            }
        }

        const data = {
            recentData: recentData,
            NewData: NewData,
            movieData: movieData
        }
        return {
            status: HttpStatus.OK,
            data: data,
            message: 'Movie Data Get Successfully'
        };
    }

    async create(createMovieDto, imageData: Buffer) {
        const result = await this.uploadImageToCloudinary(imageData);
        const imageUrl = result.url;
        const publicId = result.public_id;

        const moviedata = await new this.moviemodel({
            name: createMovieDto.name,
            status: createMovieDto.status,
            description: createMovieDto.description,
            categoryId: createMovieDto.categoryId,
            release_Date: createMovieDto.release_Date,
            releasedEpisode: createMovieDto.releasedEpisode,
            totalEpisode: createMovieDto.totalEpisode,
            image: imageUrl,
            publicId: publicId
        })
        moviedata.save()
        return {
            status: HttpStatus.CREATED,
            data: moviedata,
            message: 'Movie Created Successfully'
        };
    }

    async update(updateMovieDto, id, imageData: Buffer) {
        const result = await this.uploadImageToCloudinary(imageData);
        const imageUrl = result.url;
        const publicId = result.public_id;

        if (id && imageData) {
            const data = await this.moviemodel.findById(id)
            cloudinary.v2.uploader.destroy(data.publicId);
        }
        const data = await this.moviemodel.findByIdAndUpdate(id, {
            name: updateMovieDto.name,
            status: updateMovieDto.status,
            release_Date: updateMovieDto.release_Date,
            categoryId: updateMovieDto.categoryId,
            totalEpisode: updateMovieDto.totalEpisode,
            releasedEpisode: updateMovieDto.release_Date,
            description: updateMovieDto.description,
            image: imageUrl,
            publicId: publicId
        })
        return {
            status: HttpStatus.OK,
            data: data,
            message: 'Movie data Updated Successfully'
        };
    }

    async remove(id) {
        const data = await this.moviemodel.findByIdAndDelete(id)
        cloudinary.v2.uploader.destroy(data.publicId);

        if (data) {
            return {
                status: HttpStatus.OK,
                data: data,
                message: 'Movie Deleted Successfully'
            };
        }
        else {
            throw new NotFoundException(`Movie ${id} not found`);
        }
    }

    async filterByCategory(categoryId) {
        return await this.moviemodel.find({ categoryId: categoryId }).populate('categoryId', 'name').select('name release_Date status categoryId ').limit(3)
    }

    async dateFilter(dateFilterDto) {
        const day = Number(dateFilterDto.day)

        let data = await this.moviemodel.aggregate([
            {
                $match: {
                    release_Date: { $gte: day }
                }
            },
            {
                $project: {
                    _id: '_id',
                    name: '$name',
                    image: '$image',
                    status: '$status',
                    releasedEpisode: '$releasedEpisode',
                    totalEpisode: '$totalEpisode'
                }
            }
        ]).limit(8)

        return data;
    }
}   