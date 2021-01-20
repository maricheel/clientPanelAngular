import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app";
import "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthClientsService {

  constructor(private afau :AngularFireAuth) { }
  login(email,pass){
    return new Promise((resolve,reject)=>{
      this.afau.signInWithEmailAndPassword(email,pass)
      .then((userData)=> resolve(userData),(error)=>reject(error))
  })
  }

  loginGoogle(){
    return new Promise((resolve,reject)=>{
      this.afau.signInWithPopup(new firebase.auth.GoogleAuthProvider)
      .then((userData)=> resolve(userData),(error)=>reject(error))
  })
  }
getAuth(){
  return this.afau.authState.pipe(map(auth=>auth));
}
logOut(){
  firebase.auth().signOut()
}
newCount(email,pass){
  return new Promise((resolve,reject)=>{
    this.afau.createUserWithEmailAndPassword(email,pass)
    .then((userData)=> resolve(userData),(error)=>reject(error))
})
}
}