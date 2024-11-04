import { Body, Controller, Delete, Get, Patch, Post, UseGuards } from '@nestjs/common';

import { UserService } from '../application';
import { AuthGuard } from '@nestjs/passport';
import { CreateUser, DeleteUser, GetUserByEmail, SingIn, UpdateUser } from './user.controller.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('getUserByEmail')
  async getUserByEmail(@Body() body: GetUserByEmail) {
    return this.userService.getUserByEmail({ email: body.email });
  }

  @Post('singIn')
  async singIn(@Body() body: SingIn) {
    return this.userService.singIn(body);
  }

  @Post('createUser')
  async createUser(@Body() body: CreateUser) {
    return this.userService.createUser(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('deleteUser')
  async deleteUser(@Body() body: DeleteUser) {
    return this.userService.deleteUser(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('updateUser')
  async updateUser(@Body() body: UpdateUser) {
    return this.userService.updateUser(body);
  }
}
