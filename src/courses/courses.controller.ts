import { Controller, Get, UseGuards, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(
    private readonly coursesService: CoursesService
  ) {}
  
  @Get()
  @UseGuards(JwtAuthGuard)
  async get() {
    return await this.coursesService.findAll();
  }
  @Post()
  @UseGuards(JwtAuthGuard)
  async post(@Body() createCourseDto: CreateCourseDto) {
    return await this.coursesService.create(createCourseDto);
  }
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async one(@Param('id') id: string) {
    return await this.coursesService.findOneById(id);
  }
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() createCourseDto: CreateCourseDto) {
    return await this.coursesService.update(id, createCourseDto);
  }
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    return await this.coursesService.remove(id);
  }
}
