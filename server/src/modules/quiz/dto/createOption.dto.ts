import { IsNotEmpty, Length } from 'class-validator';
export class CreateOptionDto {
  constructor() {}

  @IsNotEmpty({ message: 'Question is required' })
  @Length(3, 50, { message: 'Question should be 3-5 characters long' })
  text: string;

  @IsNotEmpty()
  questionId: number;

  @IsNotEmpty()
  isCorrect: boolean;
}
