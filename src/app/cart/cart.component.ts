import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html'
})
export class CartComponent {
  items = this.cartService.getCartItems();

  constructor(private cartService: CartService) {}

  remove(id: number) {
    this.cartService.removeItem(id);
    this.items = this.cartService.getCartItems();
  }

  clear() {
    this.cartService.clearCart();
    this.items = [];
  }

  get total() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
