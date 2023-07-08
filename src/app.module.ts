import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [], // Ir preenchendo conforme entidades são adicionadas no banco de dados
      synchronize: true, // Ao alterar alguma entidade, as alterações são passadas, automaticamente para o banco de dados
      autoLoadEntities: true, // Carrega automaticamente as entidades criadas para o arraya de entidades.
    }),
    UserModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
