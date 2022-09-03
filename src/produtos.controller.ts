import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController {

  @Get()
  obterTodos(): string {
    return 'produtos'
  }

  @Get(':id')
  obterUm(@Param() params): string {
    return `Produto ${params.id}`
  }

  @Post()
  criar(@Body() produto): string {
    console.log(produto)    
    return 'Produto criado'
  }

  @Put()
  alterar(@Body() produto): string {
    console.log(produto)    
    return 'Produto atualizado'
  }

  @Delete(':id')
  apagar(@Param() params): string {
    return `Produto deletado ${params.id}`
  }

}