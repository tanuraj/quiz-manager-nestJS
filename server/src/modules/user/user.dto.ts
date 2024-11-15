import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, Matches } from 'class-validator';
import { REGEX } from 'src/utils/constant';
import { Match } from 'src/utils/customeValidations';

export class UserRegisterDto {
  constructor() {}

  @ApiProperty({ description: 'User name', example: 'Foo' })
  @IsNotEmpty({ message: 'Name is required' })
  @Length(3, 50, { message: 'Name should be 3-5 characters long' })
  name: string;

  @ApiProperty({ description: 'User email', example: 'Foo@testmail.com' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({ description: 'User password', example: 'qwerT123' })
  @IsNotEmpty({ message: 'Password is required' })
  @Length(8, 8, { message: 'Password must be 8 characters long' })
  @Matches(REGEX.password.rule, { message: REGEX.password.message })
  password: string;

  @ApiProperty({ description: 'User confirm password', example: 'qwerT123' })
  @IsNotEmpty({ message: 'Confirm Password is required' })
  @Match('password')
  confirmPassword: string;
}
