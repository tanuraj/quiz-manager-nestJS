import { Inject, Injectable } from '@nestjs/common';
import Question from './question.entity';
import { QUESTION_REPOSITORY } from 'src/utils/constant';

@Injectable()
export class QuestionService {
  constructor(
    @Inject(QUESTION_REPOSITORY)
    private questionRepository: typeof Question,
  ) {}

  async getAllQuestion(): Promise<Question[]> {
    return await this.questionRepository.findAll();
  }

  async createQuestion(data: Question) {
    console.log('data', data);
    return await this.questionRepository.create({ ...data });
  }
}
