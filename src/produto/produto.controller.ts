import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }

  @Get()
  async findAll() {
    return await this.produtoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.produtoService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateProdutoDto: UpdateProdutoDto,
  ) {
    return await this.produtoService.update(+id, updateProdutoDto);
  }
}
