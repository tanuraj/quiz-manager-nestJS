import { Module } from '@nestjs/common';
import UserController from './user.controller';
import { UserService } from './user.services';
import { userProviders } from './user.providers';

@Module({
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class UserModule {}
