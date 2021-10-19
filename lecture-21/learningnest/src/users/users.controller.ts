import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService :UsersService) { }

  @Get('/')
  getUsers(): Array<User> {
    return this.usersService.getUsers();
  }


  @Post("/")
  createUser(@Body() user: User): User {
    return this.usersService.createUser(user);
  }
}
