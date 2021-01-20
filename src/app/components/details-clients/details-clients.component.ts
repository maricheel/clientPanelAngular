import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from 'src/app/models/client';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-details-clients',
  templateUrl: './details-clients.component.html',
  styleUrls: ['./details-clients.component.css']
})
export class DetailsClientsComponent implements OnInit {
  id :string
  client: Client={
    id:" ",
    first:" ",
    last:" ",
    email:" ",
    phone:null,
    balance:null
  }
  showBal = false
  constructor(
    private cls:ClientsService,
    private actr:ActivatedRoute,
    private flm : FlashMessagesService,
    private router :Router
  ) { }

  ngOnInit(): void {
    this.id=this.actr.snapshot.params['id']
    this.cls.get1Client(this.id).subscribe(
      client=>{
        this.client=client
      }
    )
  }
  onKeyPres(){
    this.client.id=this.id
    this.cls.upDate(this.client)
    this.showBal = false
    this.flm.show('edited succesfuly', { cssClass: 'alert alert-success', timeout: 2000 });
    this.router.navigate(['/'])
  }
  delete(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cls.delete(this.id);

        this.router.navigate(['/'])
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  
  }

}
