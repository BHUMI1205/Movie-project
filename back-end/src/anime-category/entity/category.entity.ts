import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Category {

    @Prop()
    name: string;

    @Prop()
    status: string;

    @Prop({ default: new Date() })
    createdAt: number;

    @Prop({ default: new Date() })
    updatedAt: number;
}
export const CategorySchema = SchemaFactory.createForClass(Category);

export type CategoryDocument = Category & Document;