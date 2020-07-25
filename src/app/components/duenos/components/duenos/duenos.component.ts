import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/services/modelo/User';
import { FavoritosService } from 'src/app/services/favoritos.service';
import { GaleriaService } from 'src/app/services/galeria.service';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-duenos',
  templateUrl: './duenos.component.html',
  styleUrls: ['./duenos.component.scss']
  
})
export class DuenosComponent implements OnInit {

  
  
  
  
  users:User[]=[];
  page:number=1;
  usuarioSeleccionado:User;
  isSelected:boolean=false;
  fechaNac:string;
  cargado:boolean=false;
  usersTemplate:User[]=[];

  constructor(public toolbarService:ToolbarService, public userService:UserService, 
  public favoritosService:FavoritosService, public galeriaService:GaleriaService) {
    
        
    
  }

  ngOnInit(): void {
    this.toolbarService.titulo$.emit('OWNERS');    
    this.users=this.userService.users;
    this.usersTemplate=this.users.slice(0,20);

    this.cargado=false;
    this.userService.update$.subscribe (usuarios => {
      this.users=usuarios;
      console.log(this.users);
      if(!this.cargado){
      this.usersTemplate=this.users.slice(0,20);
      this.cargado=true;
    }
    }); 
    

  }

  verDueno(user:User){
    this.usuarioSeleccionado=this.userService.getUsuario(this.users,user.id);
    this.isSelected=true;
    this.calcularEdad();
    this.galeriaService.photos$.emit(this.usuarioSeleccionado.fotos);    
  }

  
 
  addFavorito(user:User){
    user.isFavorito=true;
    this.favoritosService.favorito$.emit(user); 
  }

  calcularEdad(){
    let dateString = this.usuarioSeleccionado.dob; 
    let newDate = new Date(dateString);
    let timeDiff = Math.abs(Date.now() - newDate.getTime());
    let ano = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    let ano2 = ((timeDiff / (1000 * 3600 * 24))/365.25);
    let anosDiff = ano2-ano;
    let dias = Math.floor((anosDiff * 365.25));   
    this.fechaNac = "Nació hace "+ano+" años y "+dias+" días";
  }

  add20users() {       
    this.usersTemplate=this.usersTemplate.concat(this.users.slice(20*this.page,20*(this.page+1)));
    
  }
  
  onScroll() {
    
    console.log('SCROLLLL');
    if (this.usersTemplate.length < this.users.length) {
      setTimeout(()=>{
        this.add20users();
        this.page ++;
        
      },2000);     
      
    } else {
      console.log('No more lines. Finish page!');
    }}
  }


