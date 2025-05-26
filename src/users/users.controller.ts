import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  @Get('/:id')
  getAllUsers(@Param() params: any, @Query() query: any) {
    console.log(params, query);
    return 'Get all users';
  }
  @Post()
  createUser(@Body() request: CreateUserDto) {
    console.log(request);
    return 'Success';
  }
  @Put()
  updateUser() {
    return 'Update Success';
  }
  @Delete()
  deleteUser() {
    return 'Delete Success';
  }
  @Patch()
  patchUser() {
    return 'Patch Success';
  }
}
