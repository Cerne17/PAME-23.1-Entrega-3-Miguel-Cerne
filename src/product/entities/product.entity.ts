import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Talvez implementar uma forma de controle para saber em que filial tem estoque do respectivo produto
@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  productname: string;
  @Column()
  type: string;
  @Column()
  size: string;
  @Column()
  quantity: number;
  @Column()
  createdAt: Date;
}
