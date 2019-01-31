import { PeliculasRoutingModule } from './peliculas-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './peliculas.component';
import { FormsModule } from '@angular/forms';
import { PeliculasService } from 'src/app/main/modules/peliculas/peliculas.service';
import { ListapeliculasComponent } from './listapeliculas/listapeliculas.component';

@NgModule({
	imports: [
		CommonModule, PeliculasRoutingModule, FormsModule
	],
    declarations: [PeliculasComponent, ListapeliculasComponent],
    providers: [PeliculasService]
})
export class PeliculasModule { }
