import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.css']
})
export class EditClientsComponent implements OnInit {
  client :Client
  id
  constructor(
    private cls:ClientsService,
    private actr:ActivatedRoute,
    private flm : FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.id=this.actr.snapshot.params['id']
    this.cls.clientsCollection.doc(this.id).valueChanges().subscribe(client=>{
      this.client=client
    })
  }
  onSubmit(){
    this.client.id=this.id
    this.cls.upDate(this.client)
    this.flm.show('edited succesfuly', { cssClass: 'alert alert-success', timeout: 2000 });

  }

}
