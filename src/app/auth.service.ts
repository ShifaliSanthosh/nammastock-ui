import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private authTokenKey = 'auth_token';

  constructor(private router: Router) {
    // Check if user is already logged in
    const token = localStorage.getItem(this.authTokenKey);
    this.isAuthenticatedSubject.next(!!token);
  }

  register(userData: any): boolean {
    // In a real app, you would make an HTTP request to your backend
    console.log('Registering user:', userData);
    // For demo, just store the user data and set as authenticated
    localStorage.setItem('user_data', JSON.stringify(userData));
    localStorage.setItem(this.authTokenKey, 'dummy-token');
    this.isAuthenticatedSubject.next(true);
    return true;
  }

  login(credentials: any): boolean {
    // In a real app, you would make an HTTP request to your backend
    const userData = JSON.parse(localStorage.getItem('user_data') || '{}');
    if (userData.email === credentials.email && userData.password === credentials.password) {
      localStorage.setItem(this.authTokenKey, 'dummy-token');
      this.isAuthenticatedSubject.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.authTokenKey);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }
}
