import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthClientsService } from 'src/app/services/auth-clients.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAuth :boolean=false
  constructor(private router:Router,private aus : AuthClientsService,private flash : FlashMessagesService) { }

  ngOnInit(): void {
    this.aus.getAuth().subscribe(auth=>{
      if(auth) 
      {this.isAuth=true}
      else{
        this.isAuth=false
      }
    })
  }
  onLogOut(){
    this.aus.logOut()
    this.router.navigate(['/login'])
    this.isAuth=false
  }

}
