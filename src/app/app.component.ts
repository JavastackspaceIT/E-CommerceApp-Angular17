import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username: string | null = null;
  cartCount = 0;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {
    // Update cart count
    this.cartService.cartItems$.subscribe(items => {
      this.cartCount = items.length;
    });

    // React to login/logout events
    this.authService.username$.subscribe(name => {
      this.username = name;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
