import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthClientsService } from 'src/app/services/auth-clients.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email
  pass 
  constructor(private router:Router,private aus : AuthClientsService,private flash : FlashMessagesService) { }

  ngOnInit(): void {
  }
  onReg(){
    this.aus.newCount(this.email,this.pass)
  
    .then(auth=> {
      if(auth){
       this.flash.show('cnx good', { cssClass: 'alert alert-primary', timeout: 2000 })
        this.router.navigate(['/'])

      }
    })
    .catch(error=>{
      this.flash.show(error.message, { cssClass: 'alert alert-danger', timeout: 2000 })
    })

  }

}
