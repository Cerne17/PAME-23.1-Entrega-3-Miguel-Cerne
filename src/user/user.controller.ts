import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Rota para fazer um post em 'user': http://localhost:3000/<user>
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // Rota para fazer um get em 'user': http://localhost:3000/<user>
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // Rota para fazer um get (by id) em 'user': http://localhost:3000/<user>/(id)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  // Rota para fazer um patch (by id) em 'user': http://localhost:3000/<user>/(id)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  // Rota para fazer um delete (by id) em 'user': http://localhost:3000/<user>/(id)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
