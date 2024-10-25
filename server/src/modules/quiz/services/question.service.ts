import { Inject, Injectable } from '@nestjs/common';
import Question from '../entities/question.entity';
import { QUESTION_REPOSITORY } from 'src/utils/constant';
import { CreateQuestionDto } from '../dto/CreateQuestion.dto';
import { Quiz } from '../entities/quiz.entity';
import Option from '../entities/options.entity';

@Injectable()
export class QuestionService {
  constructor(
    @Inject(QUESTION_REPOSITORY)
    private questionRepository: typeof Question,
  ) {}

  async getAllQuestion(): Promise<Question[]> {
    return await this.questionRepository.findAll();
  }

  async findQuestionById(id: number): Promise<Question> {
    return await this.questionRepository.findByPk(id, {
      include: [Quiz, Option],
    });
  }

  async createQuestion(data: CreateQuestionDto, quiz: Quiz): Promise<Question> {
    console.log('data', data);
    const newQuestion = await this.questionRepository.create({ ...data });
    quiz.questions = quiz.questions
      ? [...quiz.questions, newQuestion]
      : [newQuestion];
    await quiz.save();
    return newQuestion;
  }
}
