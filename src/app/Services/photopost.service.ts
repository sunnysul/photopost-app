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

  // Get All Posts By /user
  getAllPostsByUser() {
    return this.http.get(`${this.API_URL}/api/photopost/user`);
  }

  //http://localhost:9595/api/photopost
  // Create Post
  createPost(data: any) {
    return this.http.post(`${this.API_URL}/api/photopost`, data);
  }

  //http://localhost:9595/api/photopost/delete/{postid}
  //delete post
  deletePost(id: any) {
    return this.http.delete(`${this.API_URL}/api/photopost/delete/${id}`);
  }

}
