import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuestionService } from '../services/question.service';
import { CreateQuestionDto } from '../dto/CreateQuestion.dto';
import Question from '../entities/question.entity';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get() //default route is "/""
  async getAllQuestion(): Promise<CreateQuestionDto[]> {
    return await this.questionService.getAllQuestion();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createQuestion(@Body() data: Question) {
    return await this.questionService.createQuestion(data);
  }
}
