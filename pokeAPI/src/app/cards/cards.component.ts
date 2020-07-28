import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PokeapiService } from "../pokeapi.service";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"],
})
export class CardsComponent implements OnInit {
  @Input("data") data: any;
  @Output() detalles = new EventEmitter();
  constructor(private pokeService: PokeapiService) {}

  ngOnInit(): void {
    /*console.log(this.data);*/
  }

  buscarDetalles(pokemonNombre) {
    this.pokeService.getByName(pokemonNombre).then((response) => {
      this.detalles.emit(response);
     /* console.log(response);*/
    });
  }
}
