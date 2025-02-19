import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IRegister } from '../Interface/IRegister';
import { ILogin } from '../Interface/ILogin';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  Url = environment.API_URL;

  constructor(private http: HttpClient) { }


  // Register User
  registerUser(data: IRegister) {
    return this.http.post(`${this.Url}/register`, data);
  }

  // Login User
  loginUser(data: ILogin) {
    return this.http.post(`${this.Url}/login`, data);
  }
}
