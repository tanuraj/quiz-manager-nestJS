import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { quizProviders } from './repositories/quiz.providers';
import { QuestionController } from './controllers/question.controller';
import { questionProviders } from './repositories//question.providers';
import { QuestionService } from './services/question.service';

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
