import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit{

constructor(private authService: AuthService, private router: Router) {}
user: any | null = null;


ngOnInit(): void {
  this.authService.currentUser.subscribe((response) => {
    this.user = response;
    this.router.navigate(['/products/list']);

  });
}

logout(): void {
  this.authService.logout();
  this.router.navigate(['/home']);
  console.log('sesión cerrada');
}

  


 

  

}
