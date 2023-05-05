import { Schema } from "mongoose";

export class CreateUserDto {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    purchasedList: Schema.Types.ObjectId[]
    address?: string
    avatar?: string
    phoneNumber?: string
    verifyToken?: string;
}
