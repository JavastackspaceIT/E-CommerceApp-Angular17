import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  url: string = 'http://localhost:8080/springai/user/api/v1/register';
  registerUser(user: User): Observable<any> {
    console.log('Registering user:', user);
    return this.http.post<any>(this.url, user, { responseType: 'text' as 'json' });

}}