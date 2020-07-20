import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  base="https://pokeapi.co/api/v2/"
  constructor(private http: HttpClient) {
    
   }

   getAll(){
     let url= `${this.base}pokemon?limit=1000`
     return this.http.get(url).toPromise()
   }
   getByName(name){
     let url=`${this.base}pokemon/${name}`
     return this.http.get(url).toPromise()
   }
}
