import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1 } from './ex1/ex1';
import { Ex2 } from './ex2/ex2';
import { Ex3 } from './ex3/ex3';
import { Ex4 } from './ex4/ex4';
import { Ex5 } from './ex5/ex5';
import { Ex6 } from './ex6/ex6';
import { Ex7 } from './ex7/ex7';
import { Ex8 } from './ex8/ex8';
import { Ex9 } from './ex9/ex9';


const routes: Routes = [
 { path: 'exercicio1', component: Ex1 },
 { path: 'exercicio2', component: Ex2 },
 { path: 'exercicio3', component: Ex3 },
 { path: 'exercicio4', component: Ex4 },
 { path: 'exercicio5', component: Ex5 },
 { path: 'exercicio6', component: Ex6 },
 { path: 'exercicio7', component: Ex7 },
 { path: 'exercicio8', component: Ex8 },
 { path: 'exercicio9', component: Ex9 },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciciosRoutingModule {}
