import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { PhotoModule } from './modules/photo/photo.module';
import { SqlOrmDbModule } from './modules/sqlOrmDb/sqlOrmDb.module';
import { TypeOrmDbModule } from './modules/typeORMDb/typeOrmDb.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    QuizModule,
    PhotoModule,
    SqlOrmDbModule,
    TypeOrmDbModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
