import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { MainComponent } from './main/main.component';
import {DetallesComponent} from './detalles/detalles.component';

const routes: Routes = [
  {
    path:"",
    component: BuscadorComponent
  },
  {
    path: "todos",
    component: MainComponent
  },
  {
    path:"detalles/:nombrePoke",
    component: DetallesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
