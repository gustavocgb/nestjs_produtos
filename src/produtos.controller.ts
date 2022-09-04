import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produtos.model"
import { ProdutoService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {
  constructor(private produtoService: ProdutoService) {}
  
  @Get()
  async obterTodos(): Promise<Produto[]> {
    return this.produtoService.obterTodos()
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Produto> {
    return this.produtoService.obterUm(params.id)
  }

  @Post()
  async criar(@Body() produto: Produto) {
    this.produtoService.criar(produto)
  }

  @Put()
  async alterar(@Body() produto: Produto): Promise<[number, Produto[]]> {
    return this.produtoService.alterar(produto)
  }

  @Delete(':id')
  async deletar(@Param() params) {
    this.produtoService.deletar(params.id)
  }

}