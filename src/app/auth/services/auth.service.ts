import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { PersonLogin, PersonLoginResponse } from '../../products/interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http: HttpClient = inject(HttpClient);
  private baseUrl: string = "http://localhost:3000"
  private urlLogin: string = "http://localhost:3000/login"


  private userSubject = new BehaviorSubject<any | null>(
    JSON.parse(localStorage.getItem('user') || 'null')
  );

  verifySession(): Observable<any> {
    return this.http.get(`${this.baseUrl}/auth/status`, {withCredentials: true});      
  }

    login(userLogin: PersonLogin): Observable<PersonLoginResponse> {
      return this.http.post<PersonLoginResponse>(this.urlLogin, userLogin, {withCredentials: true}).pipe(
        tap((response) => {
          const user = {
            user: response.user,
            rol: response.user.rol,
          };
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
        })
      );
    }

    get currentUser() {
      return this.userSubject.asObservable();
    }

    get currentUserValue() {
      return this.userSubject.getValue();
     // return this.userSubject.value;
    }


    logout(): void {
      localStorage.removeItem('user');
      this.userSubject.next(null);  
      }

  
}
