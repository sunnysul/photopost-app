import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthServicesService } from '../../Services/auth-services.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isAuthenticated: boolean = false;

  constructor(private authService: AuthServicesService) {
    this.authService.isAuth.subscribe((isAuth: boolean) => {
      this.isAuthenticated = isAuth;
    });
  }


  logout() {

    this.authService.logout();

  }

}
