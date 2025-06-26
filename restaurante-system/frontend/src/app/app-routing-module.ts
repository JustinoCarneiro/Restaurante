import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoFormComponent } from './admin/produto-form/produto-form.component';
import { ProdutoManageComponent } from './admin/produto-manage/produto-manage.component';

const routes: Routes = [
  { path: '', redirectTo: '/cardapio', pathMatch: 'full' },
  { path: 'cardapio', component: ProdutoListComponent },
  { path: 'admin/produtos', component: ProdutoManageComponent },
  { path: 'admin/produtos/novo', component: ProdutoFormComponent },
  { path: 'admin/produtos/editar/:id', component: ProdutoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }