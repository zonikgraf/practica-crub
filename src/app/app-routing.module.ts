import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
		path: '', component: AppComponent,
		children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
			{ path: 'login', loadChildren: './login/login.module#LoginModule' },
			{ path: 'main', loadChildren: './main/main.module#MainModule' }
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






