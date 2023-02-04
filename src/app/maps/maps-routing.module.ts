import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsPageComponent } from './pages/maps-page/maps-page.component';

const routes: Routes = [{
		path:'',
		children:[
			{path:'mapa', component:MapsPageComponent},
			{path:'**', redirectTo:'mapa'}
		]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
