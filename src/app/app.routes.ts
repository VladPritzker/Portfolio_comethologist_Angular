import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Import your Login component
import { RegistrationComponent } from './registration/registration.component'; // Import your Login component
import { ProceduresComponent } from './procedures/procedures.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'procedures', component: ProceduresComponent },

];
