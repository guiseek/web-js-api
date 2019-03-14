import { Controller, Get, UseGuards, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ) {}
  
  @Get()
  async retrieve() {
    return await this.productsService.findAll();
  }
  @Get(':id')
  async get(@Param('id') id: string) {
    return await this.productsService.findOneById(id);
  }
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.create(createProductDto);
  }
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() createProductDto: CreateProductDto) {
    return await this.productsService.update(id, createProductDto);
  }
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    return await this.productsService.delete(id);
  }
}
