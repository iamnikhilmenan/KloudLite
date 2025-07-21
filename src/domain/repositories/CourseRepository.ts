import { Course } from '../entities/Course';

export interface CourseRepository {
  getCourses(page: number): Promise<Course[]>;
}
