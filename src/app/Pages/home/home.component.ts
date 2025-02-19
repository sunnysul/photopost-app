import { Component } from '@angular/core';
import { PhotopostService } from '../../Services/photopost.service';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  allData: any = [];
  imageUrls: string = environment.API_URL + '/images/';

  constructor(private photopostService: PhotopostService) {
    this.getAllData();
  }

  //get all data
  getAllData() {
    this.photopostService.getAllPosts().subscribe({
      next: (Res: any) => {
        console.log(Res);
        this.allData = Res;
      }
    });
  }
}
