import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>

@Schema({ timestamps: true })
export class Product {
    @Prop()
    productName: string

    @Prop()
    href: string

    @Prop()
    image: string

    @Prop()
    oldPrice: number

    @Prop()
    price: number

    @Prop()
    saleFash: string

    @Prop()
    size: number[]

    @Prop()
    description: String
}

export const ProductSchema = SchemaFactory.createForClass(Product)