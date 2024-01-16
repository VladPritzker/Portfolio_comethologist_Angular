import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component'; // Import your Home component
import { LoginComponent } from './login/login.component'; // Import your Login component
import { RegistrationComponent } from './registration/registration.component'; // Import your Login component

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent }
];
