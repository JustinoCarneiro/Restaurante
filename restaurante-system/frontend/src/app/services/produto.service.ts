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

  // Read (All)
  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  // Read (by ID)
  getProdutoById(id: string): Observable<Produto> {
    // CORREÇÃO: Usar crases ``
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  // Create
  createProduto(produtoData: Omit<Produto, 'id'>): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produtoData);
  }

  // Update
  updateProduto(id: string, produtoData: Omit<Produto, 'id'>): Observable<Produto> {
    // CORREÇÃO: Usar crases ``
    return this.http.put<Produto>(`${this.apiUrl}/${id}`, produtoData);
  }

  // Delete
  deleteProduto(id: string): Observable<void> {
    // CORREÇÃO: Usar crases ``
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}