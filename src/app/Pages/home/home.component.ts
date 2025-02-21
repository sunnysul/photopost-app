import { Component } from '@angular/core';
import { PhotopostService } from '../../Services/photopost.service';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { AuthServicesService } from '../../Services/auth-services.service';

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

  constructor(private photopostService: PhotopostService, private authservices: AuthServicesService) {
    authservices.isAuth.emit(true);
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
