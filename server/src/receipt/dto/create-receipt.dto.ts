import { ProductDocument } from "src/product/schemas/product.schema"
import { UserDocument } from "src/users/schemas/user.schema"
import { StatusEnum } from "../schemas/receipt.schema"

export class CreateReceiptDto {
    userInfo: UserDocument
    product: ProductDocument
    status: StatusEnum
}
