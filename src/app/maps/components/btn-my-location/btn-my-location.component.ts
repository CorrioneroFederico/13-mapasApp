import { Component,  } from '@angular/core';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent   {

  constructor() { }

  goToMyPosition(): void {
    console.log('Fui a mi posicion')
  }

}
