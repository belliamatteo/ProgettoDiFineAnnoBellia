import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http

import { 
FormsModule,
  ReactiveFormsModule
 } from '@angular/forms';
import { ViewTelefoniaComponent } from './view-telefonia/view-telefonia.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewTelefoniaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
