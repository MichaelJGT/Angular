import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokeapiService } from "../pokeapi.service";

@Component({
  selector: "app-detalles",
  templateUrl: "./detalles.component.html",
  styleUrls: ["./detalles.component.css"],
})
export class DetallesComponent implements OnInit {
  
  error: boolean=false;
  pokeInfo: any;
  constructor(
    private ruta: ActivatedRoute,
    private pokeService: PokeapiService,
  ) {}

  ngOnInit(): void {
    let pk = this.ruta.params["value"].nombrePoke;
    this.getDetalles(pk);
  }

  getDetalles(nombre) {
    this.pokeService
      .getByName(nombre)
      .then((response) => {
        this.pokeInfo=response
        console.log(response);
        console.log(response)
      })
      .catch((errorFatal) => {
        console.log(errorFatal);
        this.error=true;
      })
      .finally(()=>{
        console.log("Soy final incondicional")
      })
  }
  iteraMoves(objeto){

  }

}
