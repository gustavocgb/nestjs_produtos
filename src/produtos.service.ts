import { Injectable } from "@nestjs/common";
import { Produto } from "./produtos.model";

@Injectable()
export class ProdutoService {
  produtos: Produto[] = [
    new Produto("L01", "Livro 1", 10.00),
    new Produto("L02", "Livro 2", 9.99),
    new Produto("L03", "Livro 3", 8.99)
  ]

  obterTodos(): Produto[] {
    return this.produtos
  }

  obterUm(id: number): Produto {
    return this.produtos[0]
  }

  criar(produto: Produto) {
    this.produtos.push(produto)
  }

  alterar(produto: Produto): Produto {
    return produto;
  }

  deletar(id: number) {
    this.produtos.pop()
  }

}