import { Component, OnInit } from '@angular/core';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/services/modelo/User';
import { UserService } from 'src/app/services/user.service';
import { FavoritosService } from 'src/app/services/favoritos.service';
import { GaleriaService } from 'src/app/services/galeria.service';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  subject: Subject<any> = new Subject();
  nombreFiltro:string="";
  formGroup: FormGroup;
  users:User[]=[];
  usersTemplate:User[]=[];    
  page:number=1;
  usuarioSeleccionado:User;
  isSelected:boolean=false;
  fechaNac:string;
  cargado:boolean=false;


  constructor(public toolbarService:ToolbarService, public userService:UserService, public favoritosService:FavoritosService,
    public galeriaService:GaleriaService) {
      
      
      
   }

  ngOnInit(): void {
    this.toolbarService.titulo$.emit('SEARCH');
    this.formGroup = new FormGroup({      
      nombre: new FormControl('', [Validators.required, Validators.minLength(2)])
    });

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

    

     
    this.subject
      .pipe(debounceTime(1000))
      .subscribe(() => {
        if(this.formGroup.valid){
        this.nombreFiltro=this.formGroup.controls.nombre.value;
        this.usersTemplate=this.userService.getUsuariosPorNombre(this.users,this.nombreFiltro).slice(0,20);
      }   
      else{        
        this.usersTemplate=this.users.slice(0,20);
      }     
    }     
    );    
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
    this.usersTemplate=this.usersTemplate.concat(this.users.slice(20*this.page, 20*(this.page+1)));
  }
  
  onScroll() {
    
    if (this.usersTemplate.length<this.users.length) {      
      this.add20users();
      this.page++;
      
    } else {
      console.log('No more lines. Finish page!');
    }
  }

  onKeyUp(): void {
    this.subject.next();
  }
  
}
