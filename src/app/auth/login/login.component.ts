import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user: string = '';
  password: string = '';
  error: string = '';

  

  login() {
    
  }
}
