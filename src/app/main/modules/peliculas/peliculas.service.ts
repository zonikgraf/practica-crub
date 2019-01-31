import { Injectable } from '@angular/core'
import { Peliculas } from './peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
   
  nueva_pelicula: Peliculas[];

  constructor() { 
    this.nueva_pelicula = [];
  }

  getPelicula(){
    //return  this.nueva_pelicula;
    if(localStorage.getItem('nuevapelicula') === null) {
      this.nueva_pelicula = [];
    } else {
      this.nueva_pelicula = JSON.parse(localStorage.getItem('nuevapelicula'));
    }
    return this.nueva_pelicula;
  }

  addPelicula(nueva_pelicula:Peliculas){
    this.nueva_pelicula.push(nueva_pelicula);

    if(localStorage.getItem('nuevapelicula') === null) { 
        localStorage.setItem('nuevapelicula', JSON.stringify(this.nueva_pelicula));
    } else {
      this.nueva_pelicula = JSON.parse(localStorage.getItem('nuevapelicula'));
      this.nueva_pelicula.push(nueva_pelicula); 
      localStorage.setItem('nuevapelicula', JSON.stringify(this.nueva_pelicula));
    }
    
 }


 deletePelicula(nueva_pelicula:Peliculas) {
  for (let i = 0; i < this.nueva_pelicula.length; i++) {
    if (nueva_pelicula == this.nueva_pelicula[i]) {
      this.nueva_pelicula.splice(i, 1);
      localStorage.setItem('nuevapelicula', JSON.stringify(this.nueva_pelicula));
    }
  }
}


 
}
