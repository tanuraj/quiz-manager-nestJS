import { Quiz } from './quiz.entity';
import { QUIZ_REPOSITORY } from 'src/utils/constant';

//For SequalizeORM
export const quizProviders = [
  {
    provide: QUIZ_REPOSITORY,
    useValue: Quiz,
  },
];
