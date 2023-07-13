import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' }) // Informa que é uma entidade
export class User {
  @PrimaryGeneratedColumn() // Faz a geração automaticamente de id's únicos para cada entidade
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  isClient: boolean; // Indica se é um funcionário ou um cliente (true: cliente/ false: funcionario)
  @Column({ nullable: true })
  createdAt: Date;
}
