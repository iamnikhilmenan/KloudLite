import { CourseRepository } from '../repositories/CourseRepository';

export class GetCourses {
  constructor(private repo: CourseRepository) {}

  async execute(page = 1) {
    return this.repo.getCourses(page);
  }
}
