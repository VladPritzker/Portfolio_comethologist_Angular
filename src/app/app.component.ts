import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HttpClientModule, // Provides HttpClient
    RouterModule // Provides router-outlet functionality
  ]
})
export class AppComponent {
  title = 'my-angular-app';
}
