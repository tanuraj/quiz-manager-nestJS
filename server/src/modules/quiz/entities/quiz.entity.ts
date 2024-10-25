//Syntex for SequalizeORM
import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import Question from './question.entity';
import Option from './options.entity';
@Table
export class Quiz extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;
  comment: 'quiz id';

  @Column
  title: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  isActive: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isDeleted: boolean;

  @HasMany(() => Question, { foreignKey: 'quizId' })
  questions: Question[];

  @HasMany(() => Option, { foreignKey: 'questionId' })
  options: Option[];
}
