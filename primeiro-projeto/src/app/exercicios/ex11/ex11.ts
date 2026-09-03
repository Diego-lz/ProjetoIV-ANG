import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.css',
})
export class Ex11 {
  produto = 'Mouse Gamer';
  preco = 120;
  quantidade = 1;
  mensagem = '';


  aumentar(){
    this.quantidade++;
  }

  diminuir(){
    if (this.quantidade > 1){
      this.quantidade--;
    }
  }

  carrinho(){
    this.mensagem = `Adicionado: ${this.quantidade}x ${this.produto}`;
  }



}
