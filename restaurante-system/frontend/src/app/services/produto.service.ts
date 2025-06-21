import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = '/api/produtos';

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  createProduto(produtoData: Omit<Produto, 'id'>): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produtoData);
  }

  updateProduto(id: string, produtoData: Omit<Produto, 'id'>): Observable<Produto> {
    return this.http.put<Produto>(`<span class="math-inline">\{this\.apiUrl\}/</span>{id}`, produtoData);
  }

  deleteProduto(id: string): Observable<void> {
    return this.http.delete<void>(`<span class="math-inline">\{this\.apiUrl\}/</span>{id}`);
  }

  getProdutoById(id: string): Observable<Produto> {
    return this.http.get<Produto>(`<span class="math-inline">\{this\.apiUrl\}/</span>{id}`);
  }
}