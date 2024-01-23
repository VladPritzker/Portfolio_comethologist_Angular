import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProceduresComponent } from './procedures/procedures.component';

import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes'; // Adjust the import path as needed
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    AppComponent, // Declare AppComponent
    RegistrationComponent, // Declare RegistrationComponent
    ProceduresComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule, // Add this line
    RouterModule.forRoot(routes),
    FormsModule,  // Add FormsModule here
  ],
  providers: [],

  bootstrap: [AppComponent] // Bootstrap AppComponent
})
export class AppModule { }
