import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { quizProviders } from './quiz.providers';
import { QuestionController } from './question.controller';
import { questionProviders } from './question.providers';
import { QuestionService } from './question.service';

@Module({
  controllers: [QuizController, QuestionController],
  providers: [
    QuizService,
    QuestionService,
    ...quizProviders,
    ...questionProviders,
  ],
})
export class QuizModule {}
