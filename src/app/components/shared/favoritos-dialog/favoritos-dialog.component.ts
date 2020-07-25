import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/modelo/User';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-favoritos-dialog',
  templateUrl: './favoritos-dialog.component.html',
  styleUrls: ['./favoritos-dialog.component.scss']
})
export class FavoritosDialogComponent implements OnInit {

  users:User[]=[];

  constructor(public favoritosService:FavoritosService) { 
    this.users = this.favoritosService.favoritos;
  }

  ngOnInit(): void {
  }

}
