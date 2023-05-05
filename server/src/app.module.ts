import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { ReceiptModule } from './receipt/receipt.module';

@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb+srv://hihihaha:1234@cluster0.ibhtj.mongodb.net/?retryWrites=true&w=majority'), UsersModule, ReceiptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
