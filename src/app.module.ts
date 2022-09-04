import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module'
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './produtos.controller';
import { Produto } from './produtos.model';
import { ProdutoService } from './produtos.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'Livraria',
      /* models: [], */
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Produto])
  ],
  controllers: [
    AppController,
    ProdutosController
  ],
  providers: [
    AppService,
    ProdutoService],
})
export class AppModule {}
