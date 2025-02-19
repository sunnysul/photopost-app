import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServicesService } from '../../Services/auth-services.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private authServices: AuthServicesService) {

    this.registerForm = this.fb.group({

      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,}$')]],
      confirm_password: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', [Validators.required, Validators.minLength(7)]]

    }, { validators: this.passwordMatchValidator });

  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirm_password = form.get('confirm_password')?.value;
    return password === confirm_password ? null : { mismatch: true };
  }

  submit() {
    // console.log('btn clicked');
    // console.log(this.registerForm.value);

    this.authServices.registerUser(this.registerForm.value).subscribe({
      next: (Res: any) => {
        console.log(Res);
        /*  {
            "message": "User created successfully",
            "status": "CREATED",
            "success": true
            }
        */
      }
    });

  }

}
