import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsModule } from './maps/maps.module';

const routes: Routes = [
	{
		path:'',
		loadChildren: () => import('./maps/maps.module').then( m => m.MapsModule)
	},
	{path:'**', redirectTo:''}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
