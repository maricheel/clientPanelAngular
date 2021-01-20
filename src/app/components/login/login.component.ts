import { Component, OnInit } from '@angular/core';

import { AuthClientsService } from 'src/app/services/auth-clients.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email
  pass 
  constructor(private router:Router,private aus : AuthClientsService,private flash : FlashMessagesService) { }

  ngOnInit(): void {
     this.aus.getAuth().subscribe(auth=>{
      if(auth) 
      {this.router.navigate(['/'])}

    })
  }
  onLogin(){
    this.aus.login(this.email,this.pass)
    .then(auth=> {
      if(auth){
       this.flash.show('cnx good', { cssClass: 'alert alert-success', timeout: 2000 })
        this.router.navigate(['/'])

      }
    })
    .catch(error=>{
      this.flash.show(error.message, { cssClass: 'alert alert-success', timeout: 2000 })
    })

  }
  onGogleLogin(){
    this.aus.loginGoogle()
    .then(auth=> {
      if(auth){  
        this.flash.show('cnx good', { cssClass: 'alert alert-success', timeout: 2000 })
        this.router.navigate(['/'])

      }
    })
    .catch(error=>{
      this.flash.show(error.message, { cssClass: 'alert alert-danger', timeout: 2000 })
    })
  }

}
