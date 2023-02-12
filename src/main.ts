import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiZmNvcnJpb25lcm8iLCJhIjoiY2w5bHdvNGdnMHg2djN3cGJjbmsxYWdmMyJ9.IF0iUHxDQI0U1FzmDXulMw';

if( !navigator.geolocation ) {
  alert('El navegador no soroprta la Geolocation')
  throw new Error('El navegador no soroprta la Geolocation');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
