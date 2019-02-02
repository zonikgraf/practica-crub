import { Component, OnInit } from '@angular/core';
import { Token} from '../../login/login'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  correoCinefilo: Token[] = [{
    correo: '',
    contrasena: ''
  }];
  constructor() { }

  ngOnInit() {
    this.correoCinefilo =  JSON.parse( localStorage.getItem('credenciales'));
  }

}
