import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  name: string;
  email: string;
  mobile: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;
  private usernameSubject = new BehaviorSubject<string | null>(this.getStoredUsername());
  username$ = this.usernameSubject.asObservable();

  private getStoredUsername(): string | null {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return localStorage.getItem('username');
    }
    return null;
  }

  login(username: string) {
    this.currentUser = { name: username, email: '', mobile: '' };
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('username', username);
    }
    this.usernameSubject.next(username);
  }

  logout() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('username');
    }
    this.currentUser = null;
    this.usernameSubject.next(null);
  }

  getUsername(): string | null {
    return this.usernameSubject.value;
  }

  isLoggedIn(): boolean {
    return !!this.usernameSubject.value;
  }
}
