import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainRoutingModule } from 'src/app/main/main-routing.module';
import { MainComponent } from 'src/app/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [ MainComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule, HttpClientModule, MainRoutingModule
  ]
})
export class MainModule { }
