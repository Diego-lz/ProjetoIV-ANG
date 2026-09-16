import { Component } from '@angular/core';

@Component({
  selector: 'app-ex12',
  standalone: false,
  templateUrl: './ex12.html',
  styleUrl: './ex12.css',
})
export class Ex12 {
  nome = '';
  disciplina = 1;
  mensagem = '';
  
  aumentar(){
    this.disciplina++;
    
  }

  diminuir(){
    if(this.disciplina > 1){
      this.disciplina--;
    }
  }

  matricula(){
    this.mensagem = `Aluno: ${this.nome} está registrado em ${this.disciplina} disciplinas.`;
  }

}
