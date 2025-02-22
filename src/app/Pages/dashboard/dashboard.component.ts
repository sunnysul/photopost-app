import { Component } from '@angular/core';
import { AuthServicesService } from '../../Services/auth-services.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { PhotopostService } from '../../Services/photopost.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  allData: any = [];

  file: any;
  caption: any;
  image: any;

  constructor(private authService: AuthServicesService, private photopostService: PhotopostService) {
    this.authService.isAuthenticatUpdate();
    this.getAllData();
  }

  getAllData() {

    this.photopostService.getAllPostsByUser().subscribe({
      next: (Res: any) => {
        console.log(Res);
        this.allData = Res;
      }
    });
  }


  onFileChange(e: any) {
    // console.log(e.target.files[0]);
    this.file = e.target.files[0];
    this.image = URL.createObjectURL(e.target.files[0]);
  }

  submitPost() {

    if (!this.file) {
      alert('Please select a file');
      return;
    }

    if (!this.caption) {
      alert('Please enter a caption');
      return;
    }


    let formData = new FormData();
    formData.append('file', this.file);
    formData.append('caption', this.caption);


    this.photopostService.createPost(formData).subscribe({
      next: (Res: any) => {
        console.log(Res);
        this.getAllData();
      }
    });
  }


  logout() {

    this.authService.logout();

  }

  deletePost(id: any) {
    console.log(id);

    this.photopostService.deletePost(id).subscribe({
      next: (Res: any) => {
        console.log(Res);
        this.getAllData();
      }
    });

  }

  calculateImageHeight(width: number): number {
    // Maintain aspect ratio of 1835:891
    return Math.floor(width * (891 / 1835));
  }

}
