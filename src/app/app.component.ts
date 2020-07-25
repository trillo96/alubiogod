import { Component, OnInit } from '@angular/core'
import { User } from './services/modelo/User';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  
  constructor(public userService:UserService) {
    this.userService.cargarUsuarios().then(data=>{
      console.log(data);
    });

    this.actualizarUsuarios();
  }

  

  ngOnInit() {
  }   

  actualizarUsuarios(){
    //setinterval(funcion, cada minuto)
    //compruebo si es lunes 00:00 o jueves 00:00 cada minuto
    //actualizo usuarios
  
    setInterval(() => {
  
    let fechaHora = new Date();
    let dia = fechaHora.getDay(); 
    let horas = fechaHora.getHours();
    let minutos = fechaHora.getMinutes();  
  
    if((dia==1 || dia ==4) && horas == 0 && minutos ==0){
      this.userService.cargarUsuarios().then(data =>{
        console.log("Se han actualizado los datos");
      })
    }
  
      }, 60000);
  
  
  }
}
