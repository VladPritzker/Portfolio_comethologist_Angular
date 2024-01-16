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
  errorMessage = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const formData = new FormData();
    formData.append('firstName', this.firstName);
    formData.append('lastName', this.lastName);
    formData.append('email', this.email);
    formData.append('password', this.password);

    this.http.post('http://127.0.0.1:8000/users/', formData).subscribe(
      () => this.showSuccessMessage = true,
      error => {
        console.error(error);
        this.errorMessage = 'An error occurred during registration.';
      }
    );
  }
}
