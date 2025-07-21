import { useEffect, useState } from 'react';
import { Course } from '../../../domain/entities/Course';
import { CourseRepositoryImpl } from '../../../data/repositories/CourseRepositoryImpl';
import { GetCourses } from '../../../domain/usecases/GetCourses';

export function useCourseListViewModel() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const repo = new CourseRepositoryImpl();
  const useCase = new GetCourses(repo);

  const loadMore = () => setPage(prev => prev + 1);

  const fetchCourses = async (page: number) => {
    setLoading(true);
    try {
      const data = await useCase.execute(page);
      setCourses(data);
    } catch (err) {
      setError('Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses(page);
  }, [page]);

  return {
    courses,
    loading,
    error,
    refresh: fetchCourses,
    loadMore,
  };
}
