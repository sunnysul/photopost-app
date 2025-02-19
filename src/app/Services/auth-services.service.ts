import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IRegister } from '../Interface/IRegister';
import { ILogin } from '../Interface/ILogin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  Url = environment.API_URL;
  isAuth = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router) { }


  // Register User
  registerUser(data: IRegister) {
    return this.http.post(`${this.Url}/register`, data);
  }

  // Login User
  loginUser(data: ILogin) {
    return this.http.post(`${this.Url}/login`, data);
  }

  // Set Token
  setToken(token: string) {
    this.isAuth.emit(true);
    localStorage.setItem('token', token);
  }

  // Get Token
  getToken() {
    this.isAuth.emit(!!localStorage.getItem('token'));
    return localStorage.getItem('token');
  }

  // Delete Token
  deleteToken() {
    localStorage.removeItem('token');
  }

  // logout
  logout() {
    this.isAuth.emit(false);
    this.deleteToken();
    this.router.navigate(['/login']);
  }

  // isAuthenticated()
  isAuthenticated() {
    return !!this.getToken();
  }

  // isNotAuthenticated EventEmiter
  // isNotAuthenticated(): EventEmitter<boolean> {
  //   return 
  // }
}
