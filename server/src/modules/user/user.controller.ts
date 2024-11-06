import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserRegisterDto } from './user.dto';
import { UserService } from './user.services';
import User from './user.entity';

@Controller('user')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  @UsePipes(ValidationPipe)
  async registration(@Body() data: UserRegisterDto): Promise<User> {
    return await this.userService.userRegistration(data);
  }
}
