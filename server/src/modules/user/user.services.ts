import { Inject, Injectable } from '@nestjs/common';
import User from './user.entity';
import { USER_REPOSITORY } from 'src/utils/constant';
import { UserRegisterDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: typeof User,
  ) {}

  async userRegistration(data: UserRegisterDto): Promise<User> {
    const user = new User();
    user.name = data.name;
    user.email = data.email;
    user.password = data.password;
    await user.save();
    return user;
  }
}
