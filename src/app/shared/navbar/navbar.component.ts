import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit{

constructor(public authService: AuthService, private router: Router) {}
user: any | null = null;
isLoggued: boolean = false
//rol: String = "";

ngOnInit(): void {
  this.authService.currentUser.subscribe((response) => {
  this.user = response;
    //this.router.navigate(['/products/list']);
  
  });
 /* this.authService.currentVerifiedSession.subscribe((response) => {
    this.isLoggued=response
  })*/
  //this.verify()
  //  this.authService.verifySession().subscribe();

}


  verify(): void {
    this.authService.verifySession3().subscribe({
      next: (response) => {
        this.isLoggued = response;
        //this.rol = response.user.rol;
        console.log(response);
        console.log('Logueado');
      },
      error: (err) => {
       // this.isLoggued = false;
       // this.user = null;
        console.log('No autenticado');
      },
    });
  }

  

logout(): void {
  this.authService.logout().subscribe({
    next: (response) => {   
        console.log(response.mensaje);
          console.log('sesión cerrada');
        this.isLoggued = false;

      },
      error: (err) => {
        console.log('error');
      },
  });
  this.router.navigate(['/home']);
  this.verify()

}

  


 

  

}
