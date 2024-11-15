import { ApiProperty } from '@nestjs/swagger';
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
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export default class User extends Model {
  @ApiProperty({ description: 'User id' })
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id: number;
  comment: 'user id';

  @ApiProperty({ description: 'User name' })
  @Column({ type: DataType.TEXT })
  name: string;

  @ApiProperty({ description: 'User email' })
  @Length({ max: 200 })
  @Unique
  @Column({ type: DataType.STRING })
  email: string;

  @ApiProperty({ description: 'User hashes password' })
  @Column({ type: DataType.TEXT })
  password: string;

  @ApiProperty({ description: 'The time when the user was created' })
  @CreatedAt
  createdAt: string;

  @ApiProperty({ description: 'The time when the user was updated' })
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
