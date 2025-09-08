import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageLoaderService } from '../image-loader.service';
import { AuthService } from '../auth.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  credentials = { username: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    console.log(this.credentials.username)
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.credentials.username + ':' + this.credentials.password)
    });

    this.http.post('http://localhost:8080/api/auth/login', { username: this.credentials.username,
    password: this.credentials.password }, { responseType: 'text' }).subscribe({
      next: (res: any) => {
        console.log('Login success:', res);
        sessionStorage.setItem('user', JSON.stringify(this.credentials)); // store user info
        this.router.navigate(['/dashboard']); // redirect
      },
      error: (err) => {
        console.error('Login failed:', err);
      }
    });
}
}


