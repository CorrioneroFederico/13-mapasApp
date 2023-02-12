import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  constructor(private _placesService: PlacesService) {}
  ngAfterViewInit(): void {
    if (!this._placesService.useLocation)
      throw Error('No hay _placesService.useLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement, // le mando el elemento html donde renderiza el mapa
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this._placesService.useLocation, // starting position [lng, lat]
      zoom: 16, // starting zoom
    });

    const popup = new Popup().setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);

    new Marker({ color: 'red' })
      .setLngLat(this._placesService.useLocation)
      .setPopup(popup)
      .addTo(map);
  }
}
