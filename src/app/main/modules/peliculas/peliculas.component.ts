import { Component, OnInit } from '@angular/core';
import { CategoriaPeliculas, PuntajePeliculas } from './peliculas';
import { PeliculasService } from './peliculas.service';
import { Peliculas } from './peliculas';
import { log } from 'util';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  lista_categoria = CategoriaPeliculas;
  lista_puntaje = PuntajePeliculas;
  lista_peliculas: Peliculas[];

  lista_peliculas_firebase: Peliculas[];

  constructor(public nuevaPelicula: PeliculasService) { }

  ngOnInit() {
    
    return this.nuevaPelicula.getPeliculas()
      .snapshotChanges().subscribe(item => {
        this.lista_peliculas_firebase = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.lista_peliculas_firebase.push(x as Peliculas);
        });
      });
  }

  Puntaje;
  ponePuntaje(puntajeValue) {
    this.Puntaje = puntajeValue;
  }

  Categoria;
  poneCategoria(categoriaValue) {
    this.Categoria = categoriaValue;
  }

  agregarPelicula(nombrePelicula, comentaioPelicula, fechaPelicula) {

    if (comentaioPelicula.value != '' && nombrePelicula.value != '' && this.Puntaje != null && fechaPelicula.value != '' && this.Categoria != null) {
      this.nuevaPelicula.addPelicula({
        titulo: nombrePelicula.value,
        descipcion: comentaioPelicula.value,
        puntaje: this.Puntaje,
        categoria: this.Categoria,
        fecha: fechaPelicula.value,
      })
    } else {
      alert("Tienes que llenar el formulario");
      return false;
    }
    nombrePelicula.value = '';
    comentaioPelicula.value = '';
    fechaPelicula.value = '';
    return false;

  }

  public Indice
  obtenerIndice(pelicula, i) {
    this.Indice = i;   
  }

}
