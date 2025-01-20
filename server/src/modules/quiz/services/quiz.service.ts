import { Inject, Injectable } from '@nestjs/common';
import { Quiz } from '../entities/quiz.entity';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { QUIZ_REPOSITORY } from 'src/utils/constant';
import Question from '../entities/question.entity';
import Option from '../entities/options.entity';
import { PaginationDto } from '../dto/pagination.dto';
import { QuizPagination } from '../interface';

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
    return await this.quizRepository.create({ ...data });
  }

  async getQuizes(paginationDto: PaginationDto): Promise<QuizPagination> {
    const page = parseInt(paginationDto.page);
    const limit = parseInt(paginationDto.limit);
    const { count, rows } = await this.quizRepository.findAndCountAll({
      // attributes: ['title', 'description'],//if want to get selected fields
      limit,
      offset: (page - 1) * limit, // Offset for pagination
    });
    const totalPages = Math.ceil(count / limit);

    return {
      data: rows,
      totalCount: count,
      totalPages,
      currentPage: page,
    };
  }
}
