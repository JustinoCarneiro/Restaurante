import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoFormComponent } from './components/admin/produto-form/produto-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/cardapio', pathMatch: 'full' },
  { path: 'cardapio', component: ProdutoListComponent },
  { path: 'admin/produtos/novo', component: ProdutoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }