import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { SqlOrmDbModule } from './modules/sqlOrmDb/sqlOrmDb.module';

@Module({
  imports: [QuizModule, SqlOrmDbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
