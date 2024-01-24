import { Injectable } from '@angular/core';
import { Procedure } from '../procedures/procedures.component'; // Adjust the import path as needed

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Procedure[] = [];

  constructor() { }

  addToCart(procedure: Procedure): void {
    this.cart.push(procedure);
  }

  getCart(): Procedure[] {
    return this.cart;
  }

  // Additional methods as needed
}
