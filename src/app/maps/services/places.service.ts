import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?:[number,number];

  isUserLocationReady():boolean{
    return !!this.useLocation
  }
  constructor() {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number,number]> {
    return new Promise( (resolve,reject) => {

      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          this.useLocation = [coords.longitude,coords.latitude];
          resolve(this.useLocation)
        },
        (error) => {
          alert('No se pudo obtener la geolocalizacion');
          console.log(error);
          reject();
        }

      );

    });
  }
}
