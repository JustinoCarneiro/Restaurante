import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; // Importar ActivatedRoute
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../model/produto.model';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {
  produtoForm: FormGroup;
  isEditMode = false;
  produtoId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute // Injetar ActivatedRoute
  ) {
    this.produtoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      descricao: [''],
      preco: [null, [Validators.required, Validators.min(0.01)]],
      disponivel: [true]
    });
  }

  ngOnInit(): void {
    this.produtoId = this.route.snapshot.paramMap.get('id');
    if (this.produtoId) {
      this.isEditMode = true;
      this.produtoService.getProdutoById(this.produtoId).subscribe(produto => {
        this.produtoForm.patchValue(produto);
      });
    }
  }

  onSubmit(): void {
    if (this.produtoForm.invalid) {
      return;
    }

    if (this.isEditMode && this.produtoId) {
      this.produtoService.updateProduto(this.produtoId, this.produtoForm.value).subscribe({
        next: () => {
          alert('Produto atualizado com sucesso!');
          this.router.navigate(['/admin/produtos']);
        },
        error: (err) => alert('Erro ao atualizar produto.')
      });
    } else {
      this.produtoService.createProduto(this.produtoForm.value).subscribe({
        next: () => {
          alert('Produto criado com sucesso!');
          this.router.navigate(['/admin/produtos']);
        },
        error: (err) => alert('Erro ao criar produto.')
      });
    }
  }
}