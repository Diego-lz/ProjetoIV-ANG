import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Livros } from './livros/livros';
import { Listagem } from './listagem/listagem';

const routes: Routes = [

  {
    path: 'componente', component: Livros
  },

  {
    path: 'listagem', component: Listagem
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeiroModuloRoutingModule {}
