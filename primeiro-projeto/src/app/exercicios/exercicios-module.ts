import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ex1 } from './ex1/ex1';
import { ExerciciosRoutingModule } from './exercicios-routing-module';
import { Ex2 } from './ex2/ex2';
import { Ex3 } from './ex3/ex3';

@NgModule({
  declarations: [Ex1, Ex2, Ex3],
  imports: [CommonModule, FormsModule, ExerciciosRoutingModule],
})
export class ExerciciosModule {}
