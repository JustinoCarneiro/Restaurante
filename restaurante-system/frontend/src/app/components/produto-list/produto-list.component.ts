import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../model/produto.model';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})

export class ProdutoListComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(dados => {
      console.log('Dados recebidos da API:', dados);
      this.produtos = dados;
    });
  }
}