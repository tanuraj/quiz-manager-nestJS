import { Inject, Injectable } from '@nestjs/common';
import { Quiz } from './quiz.entity';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { QUIZ_REPOSITORY } from 'src/utils/constant';

@Injectable()
export class QuizService {
  constructor(
    @Inject(QUIZ_REPOSITORY)
    private quizRepository: typeof Quiz,
  ) {}

  async getAllQuiz(): Promise<CreateQuizDto[]> {
    return await this.quizRepository.findAll();
  }

  async createQuiz(data: CreateQuizDto) {
    console.log('data', data);
    return await this.quizRepository.create({ ...data });
  }
}
