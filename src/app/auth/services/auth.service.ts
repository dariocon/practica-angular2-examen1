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

    private verifiedSession = new BehaviorSubject<any | null>(
    JSON.parse(localStorage.getItem('verifiedSession') || 'null')
  );

  verifySession(): Observable<any> {
    return this.http.get(`${this.baseUrl}/auth/status`, {withCredentials: true});      
  }

  verifySession2(): Observable<any> {
  return this.http.get(`${this.baseUrl}/auth/status`, {withCredentials: true}).pipe(
    tap((response: any) => {
      if (response.autenticado) {
        /*const session = {
          autenticado: response.autenticado,
          rol: response.user.rol,
        };*/
        localStorage.setItem('verifiedSession', JSON.stringify(response.autenticado));
        this.verifiedSession.next(response.autenticado);
      } else {
        localStorage.removeItem('verifiedSession');
        this.verifiedSession.next(null);
      }
    })
  );
  }

  verifySession3(): Observable<any> {
  return this.http.get(`${this.baseUrl}/auth/status`, {withCredentials: true}).pipe(
    tap((response: any) => {
      if (response.autenticado) {
        const user = {
          user: response.user.user,
          rol: response.user.rol,
        };
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
      } else {
        localStorage.removeItem('user');
        this.userSubject.next(null);
      }
    })
  );
}


    login(userLogin: PersonLogin): Observable<PersonLoginResponse> {
      return this.http.post<PersonLoginResponse>(this.urlLogin, userLogin, {withCredentials: true}).pipe(
        tap((response) => {
          const user = {
            user: response.user.user,
            rol: response.user.rol,
          };
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
        })
      );
    }


    get currentVerifiedSession() {
      return this.verifiedSession.asObservable();
    }

    get currentVerifiedSessionValue() {
      return this.verifiedSession.getValue();
     // return this.userSubject.value;
    }

        get currentUser() {
      return this.userSubject.asObservable();
    }

    get currentUserValue() {
      return this.userSubject.getValue();
     // return this.userSubject.value;
    }


    logout(): Observable<any> {
      localStorage.removeItem('user');
      this.userSubject.next(null);  
          return this.http.post<any>(`http://localhost:3000/logout`,{}, {withCredentials: true});      
      }



       /* verifySession2(): Observable<any> {
  return this.http.get(`${this.baseUrl}/auth/status`, {withCredentials: true}).pipe(
    tap((response: any) => {
      if (response.autenticado) {
        const user = {
          user: response.user,
          rol: response.user.rol,
        };
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
      } else {
        localStorage.removeItem('user');
        this.userSubject.next(null);
      }
    })
  );
}*/

  
}
