import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as schema } from "mongoose";
import { Product } from "src/product/schemas/product.schema";

export type UserDocument = HydratedDocument<User>

@Schema({ timestamps: true })
export class User {
    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    password: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ type: [{ type: schema.Types.ObjectId, ref: 'products' }] })
    purchasedList: Product[]

    @Prop()
    address?: string

    @Prop()
    avatar?: string

    @Prop()
    phoneNumber?: string

    @Prop()
    verifyToken?: string;
}

export const UserSchema = SchemaFactory.createForClass(User)