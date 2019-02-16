import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService} from '../peliculas.service'
import { Peliculas } from '../peliculas'
import { $ } from 'protractor';


@Component({
  selector: 'app-listapeliculas',
  templateUrl: './listapeliculas.component.html',
  styleUrls: ['./listapeliculas.component.css']
})
export class ListapeliculasComponent implements OnInit {

  lista_peliculas_nuevas: Peliculas[];
  $key: string;

  @Input() listaDatosPeliculas: Peliculas;
  constructor(public lista_peliculas : PeliculasService) { }

  ngOnInit() {   
    console.log(this.listaDatosPeliculas)
  }

  deletePelicula($key: string) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.lista_peliculas.deleteProduct($key);
    }
  }
}
