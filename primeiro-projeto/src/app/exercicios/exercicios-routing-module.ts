import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1 } from './ex1/ex1';
import { Ex2 } from './ex2/ex2';


const routes: Routes = [
 { path: 'exercicio1', component: Ex1 },
 { path: 'exercicio2', component: Ex2 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciciosRoutingModule {}
