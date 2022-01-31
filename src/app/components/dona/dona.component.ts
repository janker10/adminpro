import { ChartData} from 'chart.js';
import { Component, Input, Output,EventEmitter ,OnInit } from '@angular/core';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  ngOnInit(): void {
       
    this.dona.labels =this.labels;

    
    this.dona.datasets.forEach((data) => {
        data.data = this.datos;
        data.backgroundColor = this.colores;
        data.hoverBackgroundColor = this.colores;
    });
    

  }
  @Input('titulo') titulo:string =  "Sin título";
  @Input('labels') labels:string[] = [ 'Label 1', 'Label 2', 'Label 3'];
  @Input('colores') colores:string[] = [ '#6857E6', '#009FEE', '#CCAABB'];
  @Input('datos') datos:number[] = [0,0,1];

   public dona: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      { data: this.datos ,
        backgroundColor: this.colores,
        hoverBackgroundColor: this.colores
      }
    ]
  };

  
  
}
