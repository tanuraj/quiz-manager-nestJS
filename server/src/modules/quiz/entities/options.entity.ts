import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import Question from './question.entity';

@Table
export default class Option extends Model {
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
  text: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  isCorrect: boolean;

  @ForeignKey(() => Question)
  @Column
  questionId: number;

  @BelongsTo(() => Question, { foreignKey: 'questionId' })
  question: Question;
}
