import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing-module';
import { CadastroAluno } from './cadastro-aluno/cadastro-aluno';

@NgModule({
  declarations: [CadastroAluno],
  imports: [CommonModule, AlunoRoutingModule],
})
export class AlunoModule {}
