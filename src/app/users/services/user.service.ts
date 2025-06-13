import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { User } from '../interfaces/product';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User, UserResponse } from '../../products/interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class UserService {

      private http : HttpClient = inject(HttpClient);
      private baseUrl: string = 'http://localhost:3000/users';
      
      private CreateUserSubject= new BehaviorSubject<User[]>([]);

          getUsers(): void {
            this.http.get<User[]>(this.baseUrl, {withCredentials: true}).subscribe({
              next: users => this.CreateUserSubject.next(users),
              error: err => console.error(err)
            });
          }


          //Me he quedado pillado en el error de este método. 
         addUser(newUser: User): Observable<UserResponse> {
           return this.http.post<UserResponse>(this.baseUrl, newUser, {withCredentials: true});
     
         } 


         /*addUser2(newUser: User): Observable<UserResponse>{
            return this.http.post<UserResponse>(this.baseUrl, newUser, {withCredentials: true}).pipe(
              tap((user) => {
                const currentUsers = this.CreateUserSubject.value;
                this.CreateUserSubject.next([...currentUsers, user]);
              })
            );
          }*/

}