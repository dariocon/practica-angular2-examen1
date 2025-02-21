import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  user: string;
  rol: string;
}


@Component({
  selector: 'app-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit{


  users: User[] = [];
  availablesRoles = ['admin', 'manager', 'seller'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {   
    this.getUsers();
  }



  getUsers() {
    this.http.get<User[]>('http://localhost:3000/users', {withCredentials: true})
      .subscribe({
        next: data => this.users = data,
        error: err => console.error('Error obteniendo usuarios', err)
      });
  }

  updateRol(user: User, newRol: string) {
    
  }
}



