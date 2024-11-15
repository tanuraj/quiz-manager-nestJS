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
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';

@Controller('user')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  @ApiCreatedResponse({ description: 'user registration response', type: User })
  @ApiBadRequestResponse({ description: 'user not registed.' })
  @UsePipes(ValidationPipe)
  async registration(@Body() data: UserRegisterDto): Promise<User> {
    return await this.userService.userRegistration(data);
  }
}
