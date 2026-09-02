import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.css',
})
export class Ex6 {
  quantidade = 0;

  maisUm(){
    this.quantidade++;
  }

  menosUm(){
    if(this.quantidade > 0){
      this.quantidade--;
    }
  }
}
