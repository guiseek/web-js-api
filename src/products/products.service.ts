import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('ProductModelToken') private readonly productModel: Model<Product>
  ) {}

  async create(product: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(product);
    return await createdProduct.save();
  }
  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }
  async findOneById(id: string): Promise<Product> {
    return await this.productModel.findById(id).exec();
  }
  async update(id: string, product: CreateProductDto): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, product).exec();
  }
  async delete(id: string): Promise<Product> {
    return await this.productModel.findByIdAndDelete(id).exec();
  }
}
