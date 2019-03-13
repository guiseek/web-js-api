import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Course } from './interfaces/course.interface';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @Inject('CourseModelToken') private readonly courseModel: Model<Course>
  ) {}

  async create(createUserDto: CreateCourseDto): Promise<Course> {
    const createdUser = new this.courseModel(createUserDto);
    return await createdUser.save();
  }
  async findAll(): Promise<Course[]> {
    return await this.courseModel.find().exec();
  }
  async findOneById(id): Promise<Course> {
    return await this.courseModel.findById(id).exec();
  }
  async update(id, course: CreateCourseDto): Promise<Course> {
    return await this.courseModel.findByIdAndUpdate(id, course).exec();
  }
  async remove(id): Promise<Course> {
    return await this.courseModel.findByIdAndDelete(id).exec();
  }
}
