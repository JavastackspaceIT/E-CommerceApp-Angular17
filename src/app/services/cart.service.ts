import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly CART_KEY = 'cartItems';
  private isBrowser: boolean;
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      const stored = localStorage.getItem(this.CART_KEY);
      const parsed = stored ? JSON.parse(stored) : [];
      this.cartItemsSubject.next(parsed);
    }
  }

  getCartItems(): any[] {
    return this.cartItemsSubject.value;
  }

  addToCart(item: any) {
    if (!this.isBrowser) return;
    const items = this.getCartItems();
    items.push(item);
    localStorage.setItem(this.CART_KEY, JSON.stringify(items));
    this.cartItemsSubject.next(items);
  }

  clearCart() {
    if (!this.isBrowser) return;
    localStorage.removeItem(this.CART_KEY);
    this.cartItemsSubject.next([]);
  }
}
