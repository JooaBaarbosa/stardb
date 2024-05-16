import { Module } from '@nestjs/common';
import { PlanoController } from './plano.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PlanoService } from './plano.service';
import { ClienteModule } from 'src/cliente/cliente.module';
import { ProdutoModule } from 'src/produto/produto.module';

@Module({
  imports: [PrismaModule, ClienteModule, ProdutoModule],
  controllers: [PlanoController],
  providers: [PlanoService],
})
export class PlanoModule {}
