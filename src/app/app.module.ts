import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes'; // Adjust the import path as needed
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent, // Declare AppComponent
    RegistrationComponent // Declare RegistrationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule, // Add this line
    RouterModule.forRoot(routes),
    FormsModule,  // Add FormsModule here


  ],
  bootstrap: [AppComponent] // Bootstrap AppComponent
})
export class AppModule { }
