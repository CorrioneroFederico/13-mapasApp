import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-maps-page',
  templateUrl: './maps-page.component.html',
  styles: [],
})
export class MapsPageComponent {
  constructor(private _placesService: PlacesService) {}

  get isUserLocationReady() {
    return this._placesService.isUserLocationReady;
  }
}
