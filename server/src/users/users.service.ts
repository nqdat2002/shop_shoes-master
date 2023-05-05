import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) { }

  async create(createUserDto: CreateUserDto) {
    const createdUser = await new this.UserModel(createUserDto).save();

    return createdUser;
  }

  findAll() {
    return this.UserModel.find().exec();
  }

  findOne(id: Schema.Types.ObjectId) {
    return this.UserModel.findById(id).exec();
  }

  async update(id: Schema.Types.ObjectId, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.UserModel.findByIdAndUpdate({ _id: id }, updateUserDto, { new: true })

    return updatedUser

  }

  async remove(id: Schema.Types.ObjectId) {
    const deletedUser = await this.UserModel.findByIdAndRemove({ _id: id }).exec();

    return deletedUser;
  }
}
