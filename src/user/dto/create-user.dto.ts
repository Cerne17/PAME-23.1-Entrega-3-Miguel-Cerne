export class CreateUserDto {
  // Dentro desse export, colocamos as informações que precisamos passar no momento de criação/instanciaçãzo de um user. Útil para explicitar que, nem todos atributos que uma entidade deve ter têm que ser passados.
  username: string;
  // Tentar adicionar um decorador em type, para settar um valor padrão de acesso. (usuário não admin)
  type: string;
}
