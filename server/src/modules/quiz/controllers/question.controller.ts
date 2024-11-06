import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuestionService } from '../services/question.service';
import { CreateQuestionDto } from '../dto/CreateQuestion.dto';
import Question from '../entities/question.entity';
import { QuizService } from '../services/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Get() //default route is "/""
  async getAllQuestion(): Promise<Question[]> {
    return await this.questionService.getAllQuestion();
  }
  @Get(':id')
  async findQuestionById(@Param() param: { id: number }): Promise<Question> {
    return await this.questionService.findQuestionById(param.id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() data: CreateQuestionDto): Promise<Question> {
    const quiz = await this.quizService.getQuizById(data.quizId);
    return await this.questionService.createQuestion(data, quiz);
  }
}
