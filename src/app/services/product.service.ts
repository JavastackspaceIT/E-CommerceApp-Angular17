import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private url = 'http://localhost:8080/api/products'; // your API endpoint

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // return this.http.get<Product[]>(this.url); // uncomment for real API

    // mock data example
    const products: Product[] = [
      { id: 1, name: 'Laptop', description: 'Powerful laptop', price: 1200, category: 'Electronics' },
      { id: 2, name: 'Phone', description: 'Smartphone with camera', price: 800, category: 'Electronics' },
            { id: 1, name: 'Laptop', description: 'Powerful laptop', price: 1200, category: 'Electronics' },
      { id: 2, name: 'Phone', description: 'Smartphone with camera', price: 800, category: 'Electronics' },
            { id: 1, name: 'Laptop', description: 'Powerful laptop', price: 1200, category: 'Electronics' },
      { id: 2, name: 'Phone', description: 'Smartphone with camera', price: 800, category: 'Electronics' },
            { id: 1, name: 'Laptop', description: 'Powerful laptop', price: 1200, category: 'Electronics' },
      { id: 2, name: 'Phone', description: 'Smartphone with camera', price: 800, category: 'Electronics' },
            { id: 1, name: 'Laptop', description: 'Powerful laptop', price: 1200, category: 'Electronics' },
      { id: 2, name: 'Phone', description: 'Smartphone with camera', price: 800, category: 'Electronics' },
            { id: 1, name: 'Laptop', description: 'Powerful laptop', price: 1200, category: 'Electronics' },
      { id: 2, name: 'Phone', description: 'Smartphone with camera', price: 800, category: 'Electronics' },
            { id: 1, name: 'Laptop', description: 'Powerful laptop', price: 1200, category: 'Electronics' },
      { id: 2, name: 'Phone', description: 'Smartphone with camera', price: 800, category: 'Electronics' },
            { id: 1, name: 'Laptop', description: 'Powerful laptop', price: 1200, category: 'Electronics' },
      { id: 2, name: 'Phone', description: 'Smartphone with camera', price: 800, category: 'Electronics' },
            { id: 1, name: 'Laptop', description: 'Powerful laptop', price: 1200, category: 'Electronics' },
      { id: 2, name: 'Phone', description: 'Smartphone with camera', price: 800, category: 'Electronics' },
            { id: 1, name: 'Laptop', description: 'Powerful laptop', price: 1200, category: 'Electronics' },
      { id: 2, name: 'Phone', description: 'Smartphone with camera', price: 800, category: 'Electronics' },
            { id: 1, name: 'Laptop', description: 'Powerful laptop', price: 1200, category: 'Electronics' },
      { id: 2, name: 'Phone', description: 'Smartphone with camera', price: 800, category: 'Electronics' },
            { id: 1, name: 'Laptop', description: 'Powerful laptop', price: 1200, category: 'Electronics' },
      { id: 2, name: 'Phone', description: 'Smartphone with camera', price: 800, category: 'Electronics' },
      { id: 3, name: 'Shoes', description: 'Running shoes', price: 120, category: 'Fashion' }
    ];
    return of(products);
  }
}



