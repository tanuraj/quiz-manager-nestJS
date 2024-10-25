import { Inject, Injectable } from '@nestjs/common';
import { Quiz } from '../entities/quiz.entity';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { QUIZ_REPOSITORY } from 'src/utils/constant';
import Question from '../entities/question.entity';
import Option from '../entities/options.entity';

@Injectable()
export class QuizService {
  constructor(
    @Inject(QUIZ_REPOSITORY)
    private quizRepository: typeof Quiz,
  ) {}

  async getAllQuiz(): Promise<CreateQuizDto[]> {
    return await this.quizRepository.findAll({
      include: [{ model: Question, include: [Option] }],
    });
  }
  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findByPk(id);
  }

  async createQuiz(data: CreateQuizDto) {
    console.log('data', data);
    return await this.quizRepository.create({ ...data });
  }
}
