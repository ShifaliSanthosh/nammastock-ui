import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  hidePassword = true; // Controls password visibility

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      country:['']
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log("Reached here")
    this.http.post('http://localhost:8080/api/auth/register', this.registerForm.value).subscribe({
      next: (res: any) => {
        console.log('Registration success:', res);
        this.router.navigate(['/dashboard']); // redirect to dashboard
      },
      error: (err) => {
        console.error('Registration failed:', err);
      }
    });

    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
