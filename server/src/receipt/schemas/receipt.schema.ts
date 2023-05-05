import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as schema } from "mongoose";
import { Product } from "src/product/schemas/product.schema";
import { User } from "src/users/schemas/user.schema";

export enum StatusEnum {
    PENDING = "PENDING",
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}
export type ReceiptDocument = HydratedDocument<Receipt>

@Schema({ timestamps: true })
export class Receipt {
    @Prop({ type: schema.Types.ObjectId, ref: 'users' })
    userInfo: User

    @Prop({ type: [{ type: schema.Types.ObjectId, ref: 'products' }] })
    product: Product[]

    @Prop({ default: StatusEnum.PENDING })
    status: StatusEnum
}

export const ReceiptSchema = SchemaFactory.createForClass(Receipt) 