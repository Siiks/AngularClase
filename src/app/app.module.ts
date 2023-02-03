import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { FirmaComponent } from './firma/firma.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LibrosComponent } from './libros/libros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { RouterModule, Routes } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InformacionComponent } from './informacion/informacion.component';
import { CdsComponent } from './cds/cds.component';
import { InformacionCdsComponent } from './informacion-cds/informacion-cds.component';


const rutas:Routes = [
  {path:'listado-libros', component: LibrosComponent},
  {path:'listado-cds', component: CdsComponent},
  {path:'informacion/:libroId', component: InformacionComponent},
  {path:'informacionCds/:cdId', component: InformacionCdsComponent},
  {path:'informacion', redirectTo: '/'} 
]
@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    Prueba2Component,
    FirmaComponent,
    CabeceraComponent,
    LibrosComponent,
    ServiciosComponent,
    CabeceraComponent,
    InformacionComponent,
    CdsComponent,
    InformacionCdsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

  
export class AppModule {
  
 }
