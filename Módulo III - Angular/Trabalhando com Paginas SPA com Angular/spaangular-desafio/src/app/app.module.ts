import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MatToolbarModule } from '@angular/material/toolbar'; // Toolbar
import {MatIconModule} from '@angular/material/icon'; // Icones
import {MatTableModule} from '@angular/material/table'; // realizar a tabela de usuarios
import { MatMenuModule } from '@angular/material/menu'; // menu


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
