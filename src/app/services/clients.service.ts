import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Client } from '../models/client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { query } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  clientsCollection:AngularFirestoreCollection <Client> 
  clientsDocument:AngularFirestoreDocument <Client>

  constructor(private afs:AngularFirestore) { 
    this.clientsCollection=this.afs.collection('clients');
  }
  getClient(user):Observable<Client[]>{
    return this.afs.collection('clients',ref=> ref.where('user','==', user)).snapshotChanges().pipe(
      map( actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  newClient(client : Client){
    this.clientsCollection.add(client)
  }
  get1Client(id : string):Observable<Client>{
    return this.clientsCollection.doc(id).valueChanges();
  }
  upDate(client:Client){
    this.clientsCollection.doc(client.id).update(client)
  }
  delete(id){
    this.clientsCollection.doc(id).delete()

  }
}
