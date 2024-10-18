import {
  Column,
  DataType,
  Model,
  Table,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Quiz } from './quiz.entity';

@Table
export default class Question extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;
  comment: 'question id';

  @Column({
    type: DataType.STRING,
  })
  question: string;

  @ForeignKey(() => Quiz)
  @Column
  quizId: number;

  @BelongsTo(() => Quiz, 'quizId')
  quiz: Quiz;
}
