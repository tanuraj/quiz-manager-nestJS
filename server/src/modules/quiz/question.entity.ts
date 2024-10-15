import { Column, DataType, Model, Table } from 'sequelize-typescript';

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
}
