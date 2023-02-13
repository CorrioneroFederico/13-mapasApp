import { Component } from '@angular/core';
import { Feature } from '../../interfaces/places';
import { PlacesService } from '../../services/places.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent  {

  public selectedId: string = '';

  constructor(
    private _placesService: PlacesService,
    private _mapService: MapService) { }

  get isLoadingPlaces(): boolean{
    return this._placesService.isLoadingPlaces;
  }

  get places(): Feature[]{
    return this._placesService.places;
  }

  flyTo(place: Feature){
    this.selectedId = place.id;

    const [lng, lat] = place.center;
    this._mapService.flyTo([lng,lat]);
  }

  getDirections(place: Feature) {

    if (!this._placesService.useLocation) throw Error('No hay useLocation')

    this._placesService.deletePlaces();

    const start = this._placesService.useLocation;
    const end = place.center as [number,number];

    this._mapService.getRouteBetweenPionts( start, end);
  }
}
