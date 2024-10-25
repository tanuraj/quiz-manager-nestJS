import {
  Column,
  DataType,
  Model,
  Table,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Quiz } from './quiz.entity';
import Option from './options.entity';

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
  @Column({
    type: DataType.INTEGER,
  })
  quizId: number;

  @BelongsTo(() => Quiz, { foreignKey: 'quizId' })
  quiz: Quiz;

  @HasMany(() => Option, { foreignKey: 'questionId' })
  options: Option[];
}
