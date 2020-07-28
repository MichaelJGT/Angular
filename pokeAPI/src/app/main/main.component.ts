import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  listaPokemon: string[] = []
  listaMoves: string[]= []
  constructor(private pokeService: PokeapiService ) { }

  ngOnInit(): void {
    this.pokeService.getAll().then(response=>{
      this.mapPokemons(response["results"])
    })
  }

  mapPokemons(arrayPokemons){
    //console.log(arrayPokemons)
    for(let objeto of arrayPokemons){
      this.listaPokemon.push(objeto.name)
    }
    /*console.log(this.listaPokemon)*/
  }
  filtrarPokemon(parametro){}
  verDetalles(evento){
    console.log(evento)
  }

}
