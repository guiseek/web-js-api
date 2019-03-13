import { Connection } from 'mongoose';
import { CourseSchema } from './schemas/course.schema';

export const coursesProviders = [
  {
    provide: 'CourseModelToken',
    useFactory: (connection: Connection) => connection.model('Course', CourseSchema),
    inject: ['DbConnectionToken'],
  },
];