import { Injectable, EventEmitter } from '@angular/core';
import { User } from './modelo/User';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {


  favoritos:User[]=[];
  favorito$ = new EventEmitter<User>();

  constructor() {
    this.favorito$.subscribe( favorito => {
      this.favoritos.push(favorito);
      console.log("favorito service: ", this.favoritos);
    } )
   }
}
