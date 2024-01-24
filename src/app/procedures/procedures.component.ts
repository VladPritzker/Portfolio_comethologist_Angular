import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartService } from '../cart-service/cart-service.component'; // Make sure this path is correct
import { CommonModule } from '@angular/common';

export interface Procedure {
  procedure_id: number;
  procedure_name: string;
  procedure_price: number;
}

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css'],
  standalone: true,
  imports: [
    CommonModule // Add CommonModule to the imports array
  ]
})
export class ProceduresComponent implements OnInit {
  procedures: Procedure[] = [];
  private apiUrl = 'http://127.0.0.1:8000/procedures/';

  constructor(private http: HttpClient, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProcedures().subscribe((data: Procedure[]) => {
      this.procedures = data;
    });
  }

  getProcedures(): Observable<Procedure[]> {
    return this.http.get<Procedure[]>(this.apiUrl);
  }

  addToCart(procedure: Procedure): void {
    this.cartService.addToCart(procedure);
  }
}
