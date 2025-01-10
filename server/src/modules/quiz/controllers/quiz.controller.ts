import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { PaginationDto } from '../dto/pagination.dto';
import { QuizPagination } from '../interface';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get() //default route is "/""
  async getQuizes(
    @Query() paginationDto: PaginationDto,
  ): Promise<QuizPagination> {
    return await this.quizService.getQuizes(paginationDto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() data: CreateQuizDto) {
    return await this.quizService.createQuiz(data);
  }
}
