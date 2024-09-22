import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/CreateQuiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get() //default route is "/""
  async getAllQuiz(): Promise<CreateQuizDto[]> {
    return await this.quizService.getAllQuiz();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() data: CreateQuizDto) {
    return await this.quizService.createQuiz(data);
  }
}
