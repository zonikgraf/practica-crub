import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from 'src/app/login/login-routing-module';

@NgModule({
	imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule,LoginRoutingModule],
	declarations: [LoginComponent],
	providers: [LoginService]
})
export class LoginModule { }
