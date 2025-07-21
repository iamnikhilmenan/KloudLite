import { Lesson } from './Lesson';

export interface CourseDetail {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}
