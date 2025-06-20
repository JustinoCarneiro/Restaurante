import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/cardapio', pathMatch: 'full' },
  { path: 'cardapio', component: ProdutoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }