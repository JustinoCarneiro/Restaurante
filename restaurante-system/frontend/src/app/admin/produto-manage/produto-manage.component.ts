import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Produto } from '../../model/produto.model';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-manage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produto-manage.component.html',
  styleUrls: ['./produto-manage.component.scss']
})
export class ProdutoManageComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe(dados => {
      this.produtos = dados;
    });
  }

  excluirProduto(id: string): void {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.produtoService.deleteProduto(id).subscribe({
        next: () => {
          alert('Produto excluído com sucesso!');
          this.carregarProdutos();
        },
        error: (err) => alert('Erro ao excluir produto.')
      });
    }
  }
}