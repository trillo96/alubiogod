import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarService } from 'src/app/services/toolbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private toolbarService:ToolbarService, public router: Router) { }

  ngOnInit(): void {
    this.toolbarService.titulo$.emit('HOME');
  }

  onDuenos(){    
    this.router.navigate(['/owners']);

  }

  onBuscar(){
    this.router.navigate(['/search']);
  }

  onPro(){
    this.router.navigate(['/pro']);
  }
}
