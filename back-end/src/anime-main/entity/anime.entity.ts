import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Movie {

    @Prop()
    name: string;

    @Prop()
    status: string;

    @Prop()
    episode: number;

    @Prop()
    description: string

    @Prop()
    image: string;

    @Prop()
    publicId: string

    @Prop()
    totalEpisode: number;

    @Prop()
    releasedEpisode: number;

    @Prop()
    release_Date: number;

    @Prop({ ref: 'Category' })
    categoryId: string

    @Prop({ default: new Date() })
    createdAt: number;

    @Prop({ default: new Date() })
    updatedAt: number;
}
export const MovieSchema = SchemaFactory.createForClass(Movie);

export type MovieDocument = Movie & Document;