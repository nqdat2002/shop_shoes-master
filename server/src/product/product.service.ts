import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private ProductModel: Model<ProductDocument>) { }

  async create(createProductDto: CreateProductDto) {
    const createdProduct = await new this.ProductModel(createProductDto).save();

    return createdProduct;
  }

  findAll() {
    return this.ProductModel.find().exec();
  }

  findOne(id: Schema.Types.ObjectId) {
    return this.ProductModel.findById(id).exec();
  }

  async update(id: Schema.Types.ObjectId, updateProductDto: UpdateProductDto) {
    const updatedProduct = await this.ProductModel.findByIdAndUpdate({ _id: id }, updateProductDto)
    return updatedProduct;
  }

  async remove(id: Schema.Types.ObjectId) {
    const deletedProduct = await this.ProductModel.findByIdAndRemove({ _id: id }).exec();
    return deletedProduct;
  }
}
