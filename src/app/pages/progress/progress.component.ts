import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'
  ]
})
export class ProgressComponent  {
  
  Valor1: number= 0;
  Valor2: number= 100;

  get getValor1(){
    return `${ this.Valor1}%`;
    
  }
  get getValor2(){
    return `${ this.Valor2}%`;
    
  }

  

}
