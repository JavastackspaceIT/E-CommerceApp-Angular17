// cart.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'shopkart_cart';
  private cartItems: any[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loadCart();
  }

  private loadCart() {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(this.cartKey);
      this.cartItems = stored ? JSON.parse(stored) : [];
      this.cartCountSubject.next(this.getTotalQuantity());
    }
  }

  private saveCart() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.cartKey, JSON.stringify(this.cartItems));
      this.cartCountSubject.next(this.getTotalQuantity());
    }
  }

  addToCart(product: any) {
    const existing = this.cartItems.find(p => p.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.saveCart();
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(p => p.id !== productId);
    this.saveCart();
  }

  clearCart() {
    this.cartItems = [];
    this.saveCart();
  }
}
