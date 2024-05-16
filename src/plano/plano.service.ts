import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlanoDto } from './dto/create-plano.dto';
import { ProdutoService } from 'src/produto/produto.service';
import { ClienteService } from 'src/cliente/cliente.service';

@Injectable()
export class PlanoService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cliente: ClienteService,
    private readonly produto: ProdutoService,
  ) {}
  async create(createplanoDto: CreatePlanoDto) {
    const produto = await this.produto.findOne(createplanoDto.idProduto);
    const cliente = await this.cliente.findOne(createplanoDto.idCliente);
    if (!produto) throw new Error('produto nao encontrado');
    if (!cliente) throw new Error('cliente nao encontrado');

    const clienteIdade = this.calcularIdade(cliente.dataDeNascimento);
    if (clienteIdade < produto.idadeDeEntrada)
      throw new Error('idade minima invalida');

    if (produto.expiracaoDeVenda < new Date(createplanoDto.dataDaContratacao)) {
      throw new Error('produto nao é valido');
    }
    if (createplanoDto.idadeDeAposentadoria < produto.idadeDeSaida) {
      throw new Error(
        'Idade de aposentadoria inválida. Deve estar dentro do intervalo permitido.',
      );
    }
    if (createplanoDto.aporte < produto.valorMinimoAporteInicial)
      throw new Error('Valor minimo de aporte invalido invalido');

    return this.prisma.plano.create({
      data: createplanoDto,
    });
  }

  async findAll() {
    return this.prisma.plano.findMany();
  }

  async findOne(id: number) {
    return this.prisma.plano.findUniqueOrThrow({
      where: { id },
    });
  }

  calcularIdade(dataNascimento: Date): number {
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const fezAniversarioEsteAno =
      hoje.getMonth() > dataNascimento.getMonth() ||
      (hoje.getMonth() === dataNascimento.getMonth() &&
        hoje.getDate() >= dataNascimento.getDate());

    return fezAniversarioEsteAno ? idade : idade - 1;
  }
}
