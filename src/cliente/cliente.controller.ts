import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @Get()
  async findAll() {
    return await this.clienteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.clienteService.findOne(+id);
  }
}
