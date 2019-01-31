import { Injectable } from '@angular/core';
import { Token } from './login'
import { from } from 'rxjs/internal/observable/from';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  credenciales: Token[];
  constructor() { 
    this.credenciales = [];
  }

  getCredenciales(credenciales:Token){
     this.credenciales.push(credenciales);
     localStorage.setItem('credenciales', JSON.stringify(this.credenciales));
  }

}
