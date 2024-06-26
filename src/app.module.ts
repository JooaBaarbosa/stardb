import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProdutoModule } from './produto/produto.module';
import { PlanoModule } from './plano/plano.module';

@Module({
  imports: [ClienteModule, PrismaModule, ProdutoModule, PlanoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
