import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http: HttpClient = inject(HttpClient);
  private baseUrl: string = "http://localhost:3000"
  

  

  verifySession(): Observable<any> {
    return this.http.get(`${this.baseUrl}/auth/status`);      
  }

  
}
