import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { BuscadorComponent } from './buscador/buscador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetallesComponent } from './detalles/detalles.component';
import { CardsComponent } from './cards/cards.component';
import {
  NgReduxModule,
  NgRedux,
  DevToolsExtension,
} from "@angular-redux/store";
import {IappState, INITIAL_STATE,rootReducer} from "./store";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BuscadorComponent,
    DetallesComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IappState>, devTools: DevToolsExtension) {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    let estadoInicial = INITIAL_STATE;
    if (devTools.isEnabled()) {
      ngRedux.configureStore(rootReducer, estadoInicial, [], enhancers);
    } else {
      estadoInicial = INITIAL_STATE;
      ngRedux.configureStore(rootReducer, estadoInicial, []);
    }
  }
}
