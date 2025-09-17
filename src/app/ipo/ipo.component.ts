import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Signup {
  email: string;
  password: string;
}

interface DashboardPayload {
  top_gainers: any[];
  top_losers: any[];
  news: any[];
}

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements AfterViewInit {
  showSignup = false;
  signup: Signup = { email: '', password: '' };

  payload: any;

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {

    this.http.get<any>('http://localhost:8000/ipo')
    .subscribe({
      next: (res) => {
        this.payload = res.ipo;
        console.log("Data",this.payload)
      },
      error: (err) => {
        console.error('Error fetching dashboard data', err);
      }
    });

  }

  toggleSignup(): void {
    this.showSignup = !this.showSignup;
  }

  onSignup(): void {
    alert(`Signed up with email: ${this.signup.email}`);
  }

  private loadDashboard(): void {
    this.http.get<any>('http://localhost:8000/ipo')
      .subscribe({
        next: (res) => {
          this.payload = res;
          
        },
        error: (err) => {
          console.error('Error fetching dashboard data', err);
        }
      });
  }
}
