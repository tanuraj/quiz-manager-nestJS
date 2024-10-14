import { IsNotEmpty, Length } from 'class-validator';
export class CreateQuizDto {
  constructor(parameters) {}

  @IsNotEmpty({ message: 'Title is required' })
  @Length(3, 5, { message: 'Title should be 3-5 characters long' })
  title: string;

  @IsNotEmpty()
  description: string;
}
