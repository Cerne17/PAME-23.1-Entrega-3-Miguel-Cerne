import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' }) // Informa que é uma entidade
export class User {
  @PrimaryGeneratedColumn() // Faz a geração automaticamente de id's únicos para cada entidade
  id: number;
  @Column()
  username: string;
  @Column()
  type: string;
  @Column()
  createdAt: Date;
}
