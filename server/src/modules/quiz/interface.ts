import { Quiz } from './entities/quiz.entity';

export interface QuizPagination {
  data: Quiz[] | [];
  totalCount: Number;
  totalPages: Number;
  currentPage: Number;
}
