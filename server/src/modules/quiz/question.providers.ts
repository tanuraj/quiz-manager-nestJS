import Question from './question.entity';
import { QUESTION_REPOSITORY } from 'src/utils/constant';

//For SequalizeORM
export const questionProviders = [
  {
    provide: QUESTION_REPOSITORY,
    useValue: Question,
  },
];
