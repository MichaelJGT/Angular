import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
lista : any
  constructor() { }

  ngOnInit(): void {
    this.lista = [
      {
        nombre:"mandarina",
        cantidad:15,
        tipo: "fruta"
      },
      {
        nombre:"Banana",
        cantidad: 2,
        tipo: "fruta"
      },
      {
        nombre:"coco",
        cantidad:7,
        tipo: "fruta"
      },
      {
        nombre:"solomillo",
        cantidad:3,
        tipo: "carne"
      },
      {
        nombre:"ternera",
        cantidad: 5,
        tipo: "carne"
      },
      {
        nombre:"cabrito",
        cantidad:7,
        tipo: "carne"
      },
      {
        nombre:"BBQ",
        cantidad:0,
        tipo: "carne"
      }
    ]

    console.log(this.lista)
  }

}
