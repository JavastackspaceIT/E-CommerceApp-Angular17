import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cartItems = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(product: Product) {
    const items = this.cartItems.value;
    this.cartItems.next([...items, product]);
  }

  clearCart() {
    this.cartItems.next([]);
  }
}
