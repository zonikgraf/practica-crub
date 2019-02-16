import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: MainComponent,
    children: [
        { path: "", redirectTo: "peliculas", pathMatch: "full" },
        { path: "peliculas", loadChildren: "./modules/peliculas/peliculas.module#PeliculasModule" },
       // { path: "ventas", loadChildren: "./modules/ventas/ventas.module#VentasModule" }
    ]
},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class MainRoutingModule { }
