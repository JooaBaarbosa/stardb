import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClienteService {
  constructor(private readonly prisma: PrismaService) {}
  create(createClienteDto: CreateClienteDto) {
    return this.prisma.cliente.create({
      data: createClienteDto,
    });
  }

  async findAll() {
    return this.prisma.cliente.findMany();
  }

  async findOne(id: number) {
    return this.prisma.cliente.findUniqueOrThrow({
      where: { id },
    });
  }
}
