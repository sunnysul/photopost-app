import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private route: Router) { }

  goToLogin() {
    this.route.navigate(['/login']);
  }

  goToRegister() {
    this.route.navigate(['/register']);
  }

  goToHome() {
    this.route.navigate(['']);
  }

  goToDashboard() {
    this.route.navigate(['/dashboard']);
  }

  navigateTo(path: string) {
    this.route.navigate([path]);
  }
}
