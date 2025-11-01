import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Order {
  id: string;
  date: string;
  items: string[];
  total: number;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  paymentMethod: string;
  address: string;
}

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orders: Order[] = [
    {
      id: 'ORD-1001',
      date: '2025-10-28',
      items: ['Bluetooth Headphones', 'USB-C Cable'],
      total: 2599,
      status: 'Delivered',
      paymentMethod: 'Credit Card',
      address: '123 MG Road, Bengaluru, India'
    },
    {
      id: 'ORD-1002',
      date: '2025-10-29',
      items: ['Wireless Mouse', 'Keyboard Combo'],
      total: 1899,
      status: 'Shipped',
      paymentMethod: 'UPI',
      address: '21 Green Park, Delhi, India'
    },
    {
      id: 'ORD-1003',
      date: '2025-11-01',
      items: ['Smartwatch'],
      total: 3499,
      status: 'Pending',
      paymentMethod: 'Cash on Delivery',
      address: 'Plot 77, Hinjewadi, Pune, India'
    }
  ];
}
