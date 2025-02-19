import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotopostService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {

  }

  // Get All Posts
  getAllPosts() {
    return this.http.get(`${this.API_URL}/api/photopost/all`);
  }


}
