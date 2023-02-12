import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';

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
    private _httpClient:HttpClient
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

    this.isLoadingPlaces = true;

    this._httpClient.get<PlacesResponse>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?country=ar&limit=5&proximity=-63.76598667492921%2C-35.665546745919066&language=es&access_token=pk.eyJ1IjoiZmNvcnJpb25lcm8iLCJhIjoiY2w5bHdvNGdnMHg2djN3cGJjbmsxYWdmMyJ9.IF0iUHxDQI0U1FzmDXulMw`)
    .subscribe( response => {
      console.log(response.features);
      this.isLoadingPlaces = false;
      this.places = response.features;
    });
  }
}
