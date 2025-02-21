import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { TestService } from './shared/services/test.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ListProductsComponent } from "./products/list-products/list-products.component";
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'jacaStocks';

  authService : AuthService = inject(AuthService);

  ngOnInit(): void {
    this.authService.verifySession()
  }
  
  

  
}
