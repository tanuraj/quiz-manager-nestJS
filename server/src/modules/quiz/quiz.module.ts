import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { quizProviders } from './quiz.providers';

@Module({
  controllers: [QuizController],
  providers: [QuizService, ...quizProviders],
})
export class QuizModule {}
