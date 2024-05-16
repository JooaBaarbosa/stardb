import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {}
  create(createprodutoDto: CreateProdutoDto) {
    return this.prisma.produto.create({
      data: createprodutoDto,
    });
  }

  async findAll() {
    return this.prisma.produto.findMany();
  }

  async findOne(id: number) {
    return this.prisma.produto.findUniqueOrThrow({
      where: { id },
    });
  }

  async update(id: number, updatePlanoDto: UpdateProdutoDto) {
    return this.prisma.plano.update({
      where: { id },
      data: updatePlanoDto,
    });
  }
}
