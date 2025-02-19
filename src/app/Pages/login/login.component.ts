import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServicesService } from '../../Services/auth-services.service';
import { NavigationService } from '../../Services/navigation.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private authServices: AuthServicesService, private nav: NavigationService) {

    this.loginForm = this.fb.group({

      email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
      password: ['', [Validators.required]],

    });


  }



  submit() {

    console.log(this.loginForm.value);

    this.authServices.loginUser(this.loginForm.value).subscribe({
      next: (Res: any) => {
        console.log(Res);
        /*
        {
    "message": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb2hhbkBnbWFpbC5jb20iLCJpYXQiOjE3Mzk5NjI5NzAsImV4cCI6MTczOTk2MzA3OH0.KYKWm6Dvg0LzlfkNinOVn0mDRDngr0GgctmO6b3pMbY",
    "status": "ACCEPTED",
    "success": true
}
        */
        if (Res.success) {
          alert("Login Success");
          this.authServices.setToken(Res.message);
          this.nav.goToDashboard();
        }

      }
    });

  }

}
