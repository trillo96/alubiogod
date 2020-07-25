import { Component, OnInit} from '@angular/core';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { FavoritosService } from 'src/app/services/favoritos.service';
import { MatDialog } from '@angular/material/dialog';
import { FavoritosDialogComponent } from '../favoritos-dialog/favoritos-dialog.component';
import { ContadorGatosService } from 'src/app/services/contador-gatos.service';





@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  mataGatos:number;
  favoritos:number;
  titulo:string = "toolbar";  
  
  

  constructor(private toolbarService:ToolbarService, private favoritosService:FavoritosService, public dialog: MatDialog, public gatosService:ContadorGatosService) {
    this.mataGatos=0;
    this.favoritos=0;   
       
   }

  ngOnInit(): void {         
    
    this.toolbarService.titulo$.subscribe( titulo => {
      this.titulo=titulo;
      console.log("toolbar", titulo);
    });

    this.favoritosService.favorito$.subscribe( favorito => {
      this.favoritos=this.favoritosService.favoritos.length;
      console.log("favorito: ",favorito);
    });
    this.gatosService.aumentarContador$.subscribe( data => {
      this.mataGatos++;
    } )

  }  
  openDialog() {
    const dialogRef = this.dialog.open(FavoritosDialogComponent);    
  }
}
