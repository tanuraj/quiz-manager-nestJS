import { IsNotEmpty, Length } from 'class-validator';
export class CreateQuestionDto {
  constructor(parameters) {}

  @IsNotEmpty({ message: 'Question is required' })
  @Length(3, 5, { message: 'Question should be 3-5 characters long' })
  question: string;
}
