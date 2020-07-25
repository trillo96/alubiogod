import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  photos$ = new EventEmitter<string[]>();

  constructor() { }
}
