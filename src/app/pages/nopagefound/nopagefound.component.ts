import { Component} from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: [ './nopagefound.componenet.css']
})
export class NopagefoundComponent {

    
   year = new Date().getFullYear();

}
