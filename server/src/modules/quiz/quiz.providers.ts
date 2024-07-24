import { QUIZ_REPOSITORY } from 'src/utils/constant';
import { Quiz } from './quiz.entity';

export const quizProviders = [
  {
    provide: QUIZ_REPOSITORY,
    useValue: Quiz,
  },
];
