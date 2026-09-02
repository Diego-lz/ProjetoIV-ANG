import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAluno } from './cadastro-aluno/cadastro-aluno';

const routes: Routes = [
{
  path:'cadastro', component: CadastroAluno
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoRoutingModule {}
