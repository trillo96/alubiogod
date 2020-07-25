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
    
  }

  

  ngOnInit() {
  }   
}
