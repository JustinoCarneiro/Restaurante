import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoFormComponent } from './admin/produto-form/produto-form.component';
import { ProdutoManageComponent } from './admin/produto-manage/produto-manage.component';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutoListComponent,
    ProdutoFormComponent,
    ProdutoManageComponent
  ],

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [App]
})
export class AppModule { }