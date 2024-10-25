import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OptionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';
import { CreateOptionDto } from '../dto/createOption.dto';
import Option from '../entities/options.entity';

@Controller('question/option')
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async saveOption(@Body() data: CreateOptionDto) {
    console.log('data.questionId:  ', data.questionId);
    const question = await this.questionService.findQuestionById(
      data.questionId,
    );

    return await this.optionService.createOption(data, question);
  }
}
