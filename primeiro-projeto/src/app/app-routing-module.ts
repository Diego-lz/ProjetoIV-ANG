import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'modulo',
    loadChildren: () => import('./primeiro-modulo/primeiro-modulo-module').then(m => m.PrimeiroModuloModule)
  },
  {
    path: 'aluno',
    loadChildren: () => import('./aluno/aluno-module').then(m => m.AlunoModule)
  },
  {
  path: 'exercicios',
  loadChildren: () => import('./exercicios/exercicios-module').then(m => m.ExerciciosModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
