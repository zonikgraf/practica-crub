import { Injectable } from '@angular/core'
import { Peliculas } from './peliculas';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  peliculas_list: AngularFireList<any>;
  nueva_pelicula: Peliculas[];

  constructor(private firebase: AngularFireDatabase) {
    this.nueva_pelicula = [];
  }

  getPeliculas() {
    return this.peliculas_list = this.firebase.list('alexander');
  }

  addPelicula(nueva_pelicula: Peliculas) {
    this.peliculas_list.push({
      titulo: nueva_pelicula.titulo,
      descipcion: nueva_pelicula.descipcion,
      puntaje: nueva_pelicula.puntaje,
      categoria: nueva_pelicula.categoria,
      fecha: nueva_pelicula.fecha
    })
  }

  deleteProduct($key: string) {
    this.peliculas_list.remove($key);
  }

}
