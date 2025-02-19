import { Component } from '@angular/core';
import { AuthServicesService } from '../../Services/auth-services.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private authService: AuthServicesService) { }


  logout() {

    this.authService.logout();

  }

}
