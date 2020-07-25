import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  titulo$ = new EventEmitter<string>();

  constructor() { }
}
