import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { DbModule } from './modules/db/db.module';

@Module({
  imports: [QuizModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
