import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { PokeapiService } from "../pokeapi.service";
import { Router } from "@angular/router";
import { NgRedux } from '@angular-redux/store';
import { IappState } from '../store';
import { CAMBIAR_NOMBRE } from '../redux-actions';
@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html",
  styleUrls: ["./buscador.component.css"],
})
export class BuscadorComponent implements OnInit {
  buscador: FormGroup;
  listaNombre: string[] = [];
  etiqueta: string[] = [];

  constructor(
    private fb: FormBuilder,
    private pokeService: PokeapiService,
    private ruta: Router,
    private redux: NgRedux<IappState>
  ) {}

  ngOnInit(): void {
    this.getPokemon(), this.construirFormulario();
    //mirar estado actual
    this.redux.getState()
    //modificar estados
    this.redux.dispatch({
      type: CAMBIAR_NOMBRE,
      data: {usuario: "micha"}
    })
    //subscribirnos a cambios del estado
    this.redux.subscribe(()=>{
      console.log("ha habido un cambio")
    })
  }

  mapPokemons(arrayPokemons) {
    //console.log(arrayPokemons)
    for (let objeto of arrayPokemons) {
      this.listaNombre.push(objeto.name);
    }
    /*console.log(this.listaPokemon)*/
  }
  getPokemon() {
    this.pokeService.getAll().then((e) => {
      this.mapPokemons(e["results"]);
    });
  }
  construirFormulario() {
    this.buscador = this.fb.group({
      nombrePokemon: "",
    });
  }
  funcionClick() {
    //console.log(this.buscador)
    //console.log(this.listaNombre)
    let listaFiltrada = this.listaNombre.filter((elemento) => {
      //return elemento == this.buscador.value.nombrePokemon[]
      return elemento.includes(this.buscador.value.nombrePokemon);
    });
    this.etiqueta = listaFiltrada;
  }

  buscar(nombre) {
    console.log(nombre);
    this.iraDetalles(nombre)
  }
  buscar2() {
    console.log(this.etiqueta[0]);
    this.iraDetalles(this.etiqueta[0])
  }
  iraDetalles(nombre){
    this.ruta.navigate(["/detalles",nombre])
  }

  
}
