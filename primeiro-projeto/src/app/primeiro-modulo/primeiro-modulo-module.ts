import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeiroModuloRoutingModule } from './primeiro-modulo-routing-module';
import { Livros } from './livros/livros';
import { Listagem } from './listagem/listagem';

@NgModule({
  declarations: [Livros, Listagem],
  imports: [CommonModule, PrimeiroModuloRoutingModule],
})
export class PrimeiroModuloModule {}
