import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styles: [
  ]
})
export class MapViewComponent implements OnInit {

  constructor(
    private _placesService:PlacesService
  ) { }

  ngOnInit(): void {
    console.log( this._placesService.useLocation );
  }

}
