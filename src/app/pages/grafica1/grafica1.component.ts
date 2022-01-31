import { Component } from '@angular/core';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {
   public etiquetas:string[] = ['Soporte','Ventas','Operaciones']
   public data:number[] = [20,20,50]
   public titulo:string = 'Ventas'
   public colores:string[] = ['red','yellow','blue']

   public etiquetas2:string[] = ['Desarrollo','Administracion','Mantenimiento']
   public data2:number[] = [20,20,20]
   public titulo2:string = 'Compras'
   public colores2:string[] = ['black','white','cyan']
  
 }
