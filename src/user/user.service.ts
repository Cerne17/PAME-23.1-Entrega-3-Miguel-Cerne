import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class UserService {
  // Injeta o Respositório da entidade User: Habilita a utilização da tabela de user neste arquivo
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  // Verbo post: serve para instanciar um novo usuário, adicionando assim um novo elemento na tabela
  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create({
      // Passa os atributos, um de cada vez, do usuário que está sendo criado
      ...createUserDto,
      // Obtém, de forma dinâmica, o momento de instanciação do usuário
      createdAt: new Date(),
    });
    // Pode ser retornado também, mas farei assim por enquanto.
    this.userRepository.save(newUser);
  }

  // Verbo get: serve para obter todos os usuários atuais registrados nas tabelas
  findAll() {
    return this.userRepository.find();
  }

  // Verbo get com '/id': serve para obter o user com id passado como parametro
  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  // Verbo Patch: serve para atualizar o objeto do user com o id passado por parametro
  update(id: number, updateUserDto: UpdateUserDto) {
    this.userRepository.update({ id }, { ...updateUserDto });
  }

  // Verbo delete: serve para deletar o objeto do user com o id passado
  remove(id: number) {
    this.userRepository.delete({ id });
  }
}
