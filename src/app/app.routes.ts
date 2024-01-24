import { LoginComponent } from './login/login.component'; // Import your Login component
import { RegistrationComponent } from './registration/registration.component'; // Import your Login component
import { ProceduresComponent } from './procedures/procedures.component';
import { CartComponent } from '../app/cart-service/cart-component.component'; // Adjust the path as needed
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'procedures', component: ProceduresComponent },
  { path: 'cart', component: CartComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
