import { Inject, Injectable } from '@nestjs/common';
import { OPTION_REPOSITORY } from 'src/utils/constant';
import Option from '../entities/options.entity';
import { CreateOptionDto } from '../dto/createOption.dto';
import Question from '../entities/question.entity';

@Injectable()
export class OptionService {
  constructor(
    @Inject(OPTION_REPOSITORY)
    private optionRepository: typeof Option,
  ) {}

  async createOption(
    data: CreateOptionDto,
    question: Question,
  ): Promise<Option> {
    const newOption = await this.optionRepository.create({ ...data });
    question.options = question.options
      ? [...question.options, newOption]
      : [newOption];
    return newOption;
  }
}
