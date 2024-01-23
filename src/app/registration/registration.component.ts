import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RegistrationComponent {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  showSuccessMessage = false;
  success_message = ''
  errorMessage = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const formData = new FormData();
    formData.append('firstName', this.firstName);
    formData.append('lastName', this.lastName);
    formData.append('email', this.email);
    formData.append('password', this.password);

    this.http.post('http://127.0.0.1:8000/users/', formData, { responseType: 'text' }).subscribe(
  (response) => {
    this.showSuccessMessage = true;
    this.errorMessage = ''; // Clear any previous error message
  },
  (error) => {
    this.showSuccessMessage = false; // Clear success message
    this.errorMessage = 'An error occurred during registration.';
  }
);
  }
}
