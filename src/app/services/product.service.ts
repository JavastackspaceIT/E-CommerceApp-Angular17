import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private url = 'http://localhost:8080/springai/api/v1/products'; // your API endpoint

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
     return this.http.get<Product[]>(this.url);
  }
}



