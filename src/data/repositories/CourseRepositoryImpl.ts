import { Course } from '../../domain/entities/Course';
import { CourseDetail } from '../../domain/entities/CourseDetail';
import { CourseRepository } from '../../domain/repositories/CourseRepository';
import getApiCall from '../api/CourseApi';

export class CourseRepositoryImpl implements CourseRepository {
  async getCourses(page: number): Promise<Course[]> {
    const res = await getApiCall.get(`/courses?page=${page}`);
    return res.data.courses.map((course: any) => ({
      id: course.id,
      slug: course.slug,
      title: course.title,
      thumbnail_url: course.thumbnail_url,
      thumbnail_video_url: course.thumbnail_video_url,
      tutors: course.tutors,
      popularity: course.popularity,
      difficulty_level: course.difficulty_level,
      categories: course.categories,
      plan: course.plan,
    }));
  }

  async getCourseDetail(slug: string): Promise<CourseDetail> {
    const res = await getApiCall.get(`/courses/${slug}`);
    const data = res.data;

    const lessons =
      data.modules?.flatMap((module: any) =>
        module.lessons.map((lesson: any) => ({
          id: lesson.id,
          title: lesson.title,
          duration: lesson.duration || 0,
          videoUrl: lesson.videoUrl || '',
          completed: false,
          type: lesson.type || 'video',
        })),
      ) ?? [];

    return {
      id: data.id,
      title: data.title,
      description: data.description,
      lessons,
    };
  }
}
