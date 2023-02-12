import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';
import { PlacesApiClient } from '../apis/placesApiClient';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?:[number,number];
  public isLoadingPlaces:boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady():boolean{
    return !!this.useLocation
  }
  constructor(
    private _placesApi:PlacesApiClient
  ) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number,number]> {
    return new Promise( (resolve,reject) => {

      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          this.useLocation = [coords.longitude,coords.latitude];
          resolve(this.useLocation);
        },
        (err) => {
          alert('No se pudo obtener la geolocalizacion');
          console.log(err);
          reject();
        }

      );

    });
  }

  getPlacesByQuery( query: string = ''){

    if (query.length === 0){
      this.places = [];
      this.isLoadingPlaces = false;
      return;
    }
    if ( !this.useLocation) throw Error('No hay useLocation');

    this.isLoadingPlaces = true;

    this._placesApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: this.useLocation?.join(',')
      }
    })
    .subscribe( response => {
      console.log(response.features);
      this.isLoadingPlaces = false;
      this.places = response.features;
    });
  }
}
