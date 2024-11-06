import * as bcrypt from 'bcrypt';
import {
  BeforeCreate,
  BeforeUpdate,
  Column,
  CreatedAt,
  DataType,
  Length,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export default class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id: number;
  comment: 'user id';

  @Column({ type: DataType.TEXT })
  name: string;

  @Length({ max: 255 })
  @Column({ type: DataType.STRING, unique: true })
  email: string;

  @Column({ type: DataType.TEXT })
  password: string;

  @CreatedAt
  createdAt: string;

  @UpdatedAt
  updatedAt: string;

  @BeforeUpdate
  @BeforeCreate
  static async setPassword(instance: User) {
    // this will be called when an instance is created or updated
    const salt = await bcrypt.genSalt();
    instance.password = await bcrypt.hash(instance.password, salt);
  }
}
