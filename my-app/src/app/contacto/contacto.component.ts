import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  parametros: any; 
  
  constructor(private ruta:ActivatedRoute) { }

  ngOnInit(): void {
    this.parametros= this.ruta.params
    console.log(this.parametros)
  }

}
