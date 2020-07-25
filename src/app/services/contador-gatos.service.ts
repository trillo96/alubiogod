import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorGatosService {

  aumentarContador$ = new EventEmitter<number>();

  constructor() { }
}
