import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { AuthClientsService } from 'src/app/services/auth-clients.service';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  constructor(
    private clientService : ClientsService,
    private aus : AuthClientsService
  ) { }

  clients: Client[]; 
  total:number = 0
    searchclients: Client[]
  ngOnInit(): void {
    this.aus.getAuth().subscribe(auth =>{
      this.clientService.getClient(auth.uid).subscribe(clients=>{
        this.searchclients=this.clients=clients 
        this.total=this.getTotal()
      })
    })
  
  }
  getTotal():number{
    return this.clients.reduce((total,client)=>{
      return total + parseFloat(client.balance.toString()) ;
    },0)
  }
  search(query:string){
    this.searchclients=(query)?this.clients.filter(client=>client.first.includes(query)):this.clients
  }

}



