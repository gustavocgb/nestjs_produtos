import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produtos.model"

@Controller('produtos')
export class ProdutosController {
  produtos: Produto[] = [
    new Produto("L01", "Livro 1", 10.00),
    new Produto("L02", "Livro 2", 9.99),
    new Produto("L03", "Livro 3", 8.99)
  ]

  @Get()
  obterTodos(): Produto[] {
    return this.produtos
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtos[0]
  }

  @Post()
  criar(@Body() produto: Produto) {
    produto.id = 3
    this.produtos.push(produto)
  }

  @Put()
  alterar(@Body() produto: Produto): Produto {
    return produto
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.produtos.pop()
  }

}