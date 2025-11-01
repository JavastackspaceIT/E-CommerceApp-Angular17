import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


interface Order {
  id: number;
  productName: string;
  quantity: number;
}



@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [AuthService]
})
export class ProfileComponent {
  
  constructor(private authService: AuthService, private router: Router) {}


  
  user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '+1 555 123 4567',
    address: '123 Main Street, New York, USA',
    joined: '2023-09-15',
    avatar: 'https://i.pravatar.cc/150?img=47'
  };

  orders = [
    { id: 'ORD123', date: '2025-10-22', total: 259.99, status: 'Delivered' },
    { id: 'ORD124', date: '2025-10-25', total: 89.5, status: 'Shipped' },
    { id: 'ORD125', date: '2025-10-29', total: 42.0, status: 'Pending' }
  ];

  ngOnInit(): void {
    // In a real app, you'd fetch this from a service:
    // this.userService.getProfile().subscribe(u => this.user = u);
  }



  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
