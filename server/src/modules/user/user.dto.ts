import { IsNotEmpty, Length, Matches } from 'class-validator';
import { REGEX } from 'src/utils/constant';
import { Match } from 'src/utils/customeValidations';

export class UserRegisterDto {
  constructor() {}

  @IsNotEmpty({ message: 'Name is required' })
  @Length(3, 50, { message: 'Name should be 3-5 characters long' })
  name: string;

  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @Length(8, 8, { message: 'Password must be 8 characters long' })
  @Matches(REGEX.password.rule, { message: REGEX.password.message })
  password: string;

  @IsNotEmpty({ message: 'Confirm Password is required' })
  @Match('password')
  confirmPassword: string;
}
