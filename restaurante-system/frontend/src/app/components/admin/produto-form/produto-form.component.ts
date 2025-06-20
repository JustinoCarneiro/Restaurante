import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {
  produtoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router
  ) {
    // Inicializa o formulário no construtor
    this.produtoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      descricao: [''],
      preco: [null, [Validators.required, Validators.min(0.01)]],
      disponivel: [true]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.produtoForm.invalid) {
      return;
    }

    console.log('Enviando dados:', this.produtoForm.value);

    this.produtoService.createProduto(this.produtoForm.value).subscribe({
      next: (produtoCriado) => {
        console.log('Produto criado com sucesso!', produtoCriado);
        alert('Produto criado com sucesso!');
        this.router.navigate(['/cardapio']); // Navega para a lista de produtos após o sucesso
      },
      error: (err) => {
        console.error('Erro ao criar produto', err);
        alert('Erro ao criar produto. Veja o console para mais detalhes.');
      }
    });
  }
}