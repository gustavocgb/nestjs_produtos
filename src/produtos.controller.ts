import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produtos.model"
import { ProdutoService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {
  constructor(private produtoService: ProdutoService) {}
  
  @Get()
  obterTodos(): Produto[] {
    return this.produtoService.obterTodos()
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtoService.obterUm(params.id)
  }

  @Post()
  criar(@Body() produto: Produto) {
    this.produtoService.criar(produto)
  }

  @Put()
  alterar(@Body() produto: Produto): Produto {
    return this.produtoService.alterar(produto)
  }

  @Delete(':id')
  deletar(@Param() params) {
    this.produtoService.deletar(params.id)
  }

}