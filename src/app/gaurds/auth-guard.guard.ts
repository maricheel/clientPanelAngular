import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate,  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private anf :AngularFireAuth ,private route:Router){}
    canActivate(): Observable<boolean>  {
     return this.anf.authState.pipe(map(auth=>{
        if(!auth) {
          this.route.navigate(['/login'])
          return false
        }else{
          return true
        }
      }))
  
}
}
