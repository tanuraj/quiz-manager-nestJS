import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  getAllQuiz(): number[] {
    return [1, 2, 3];
  }
}
