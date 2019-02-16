import { PeliculasRoutingModule } from './peliculas-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './peliculas.component';
import { FormsModule } from '@angular/forms';
import { PeliculasService } from './peliculas.service';
import { ListapeliculasComponent } from './listapeliculas/listapeliculas.component';

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { environment } from '../../../../environments/environment'

@NgModule({
	imports: [
		CommonModule,
		PeliculasRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule
	],
	declarations: [PeliculasComponent, ListapeliculasComponent],
	providers: [PeliculasService]
})
export class PeliculasModule { }
