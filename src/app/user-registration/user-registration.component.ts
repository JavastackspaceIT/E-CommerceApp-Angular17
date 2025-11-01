import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { User } from '../models/user';
import { RegistrationService } from '../services/registration.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule ,CommonModule,HttpClientModule,MatSnackBarModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css',
  providers: [RegistrationService]
})
export class UserRegistrationComponent {
[x: string]: any;

registrationForm!: FormGroup;
submitting = false;
serverError: string | null = null;
successMessage: string | null = null;



  passwordMatchValidator: any;
  constructor(private fb: FormBuilder, private userService: RegistrationService,private snackBar: MatSnackBar) {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]], 
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')]], 
      password: ['', [Validators.required, Validators.minLength(6)]],
      fatherName: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  } 

  passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  get c() {
  return this.registrationForm.controls;
}

  // declared as a normal method (so template can call onSubmit())
  onSubmit(): void {
    
    this.submitting = true;
    // call a service here; example simulate:
    console.log('FormData', this.registrationForm.value);
    const user: User  = {
      fullName: this.registrationForm.value.fullName,
      email: this.registrationForm.value.email,
      mobile: this.registrationForm.value.mobile,
      password: this.registrationForm.value.password,
      fatherName: this.registrationForm.value.fatherName
    };

  this.userService.registerUser(user).subscribe({
  next: (response) => {
    this.successMessage = 'Registration successful!';
    this.registrationForm.reset();   // ✅ clears the input boxes
    this.submitting = false;
this.snackBar.open('Registration successful!', 'Close', {
  duration: 3000,
  horizontalPosition: 'center',
  verticalPosition: 'top',
});

  },
  error: (err) => {
    this.serverError = 'Registration failed. Please try again.';
    this.submitting = false;


this.snackBar.open('Registration failed. Please try again.', 'Close', {
  duration: 3000,
  horizontalPosition: 'center',
  verticalPosition: 'top',
});



    
    
  }
});
  }
}
