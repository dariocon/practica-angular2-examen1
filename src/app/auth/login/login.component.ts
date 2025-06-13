import { HttpClient } from '@angular/common/http';
import { Component, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { PersonLogin } from '../../products/interfaces/person';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService) {}
  // @ViewChild('form') form! : NgForm;

  login() {
    const userLogin: PersonLogin={
      user: this.user,
      password: this.password
    }
    this.authService.login(userLogin).subscribe({
      next: (response) =>{
        console.log('Logueado con éxito');
      },error(err) {
        console.log('error en el login');

      },
    });
    //this.authService.verifySession();
  }
}

