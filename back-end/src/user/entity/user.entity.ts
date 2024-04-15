import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {

    @Prop({ required: true })
    userName: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: "user"})
    role: string;

    @Prop({ default: new Date() })
    createdAt: number;

    @Prop({ default: new Date() })
    updatedAt: number;
}
export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = User & Document;