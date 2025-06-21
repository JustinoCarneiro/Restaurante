import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoFormComponent } from './admin/produto-form/produto-form.component';
import { ProdutoManageComponent } from './admin/produto-manage/produto-manage.component'; // 1. Importar

const routes: Routes = [
  { path: '', redirectTo: '/cardapio', pathMatch: 'full' },
  { path: 'cardapio', component: ProdutoListComponent },
  { path: 'admin/produtos/novo', component: ProdutoFormComponent },
  { path: 'admin/produtos', component: ProdutoManageComponent } // 2. Adicionar nova rota
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }