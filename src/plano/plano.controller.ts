import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PlanoService } from './plano.service';
import { CreatePlanoDto } from './dto/create-plano.dto';

@Controller('plano')
export class PlanoController {
  constructor(private readonly planoService: PlanoService) {}

  @Post()
  create(@Body() createPlanoDto: CreatePlanoDto) {
    return this.planoService.create(createPlanoDto);
  }

  @Get()
  async findAll() {
    return await this.planoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.planoService.findOne(+id);
  }
}
