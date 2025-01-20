import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { quizProviders } from './repositories/quiz.providers';
import { QuestionController } from './controllers/question.controller';
import { questionProviders } from './repositories//question.providers';
import { QuestionService } from './services/question.service';
import { optionProviders } from './repositories/option.providers';
import { OptionController } from './controllers/option.controller';
import { OptionService } from './services/option.service';
import { ApiTokenCheckMiddleware } from 'src/common/middleware/api-token-check.middleware';

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  providers: [
    QuizService,
    QuestionService,
    OptionService,
    ...quizProviders,
    ...questionProviders,
    ...optionProviders,
  ],
})
export class QuizModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiTokenCheckMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
