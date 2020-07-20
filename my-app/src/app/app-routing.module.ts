import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from "./contacto/contacto.component"
import { MainComponent } from "./main/main.component"

const routes: Routes = [
{
	path:"contacto", 
	component: ContactoComponent
},
{
	path:"",
	component: MainComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
