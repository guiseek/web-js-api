import { CreateCourseDto } from './create-course.dto';

describe('CreateCourse', () => {
  it('should be defined', () => {
    expect(new CreateCourseDto()).toBeTruthy();
  });
});
