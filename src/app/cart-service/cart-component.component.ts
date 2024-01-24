import { Component, OnInit } from '@angular/core';
import { Procedure } from '../procedures/procedures.component'; // Adjust the path as needed
import { CartService } from '../cart-service/cart-service.component'; // Adjust the path as needed
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-service.component.html',
  styleUrls: ['./cart-service.component.css'],
  standalone: true,
  imports: [
    CommonModule // Add CommonModule to the imports array
  ]
})
export class CartComponent implements OnInit {
  cartItems: Procedure[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }

  // Add any additional methods needed for cart functionality
}
