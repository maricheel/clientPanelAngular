import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientsService } from 'src/app/services/clients.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthClientsService } from 'src/app/services/auth-clients.service';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.css']
})
export class AddClientsComponent implements OnInit {

  constructor(
    private cliServ : ClientsService,
    private route :Router,
    private flashMessagesService : FlashMessagesService,
    private aus : AuthClientsService
  ) { }
  client : Client={
    first:" ",
    last:" ",
    email:" ",
    phone:null, 
    balance:0 ,
    user: " "
  }
  ngOnInit(): void {
    this.aus.getAuth().subscribe(auth=>{
      this.client.user=auth.uid
    })
  }
  onSubmit(){
    this.cliServ.newClient(this.client)
    var flashMessagesService = this.flashMessagesService;

    // and call it inside your .then function
    flashMessagesService.show('added succesfuly', { cssClass: 'alert alert-success', timeout: 2000 });
    return this.route.navigate(['/'])
  }

}
