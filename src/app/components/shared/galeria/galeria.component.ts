import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Photo } from 'src/app/services/modelo/Photo';
import { GaleriaService } from 'src/app/services/galeria.service';
import { User } from 'src/app/services/modelo/User';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  
  photos$:string[]=[];
  

  constructor(public userService:UserService, public galeriaService:GaleriaService) { 
    this.galeriaService.photos$.subscribe( photos =>{      
      console.log('service: ',photos);
      this.photos$ = photos;
           
    });
  }

  ngOnInit(): void {
    
  }
}
