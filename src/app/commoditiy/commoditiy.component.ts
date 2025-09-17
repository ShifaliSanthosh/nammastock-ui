import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Commodity {
  product: string;
  expiry: string;
  change: number;
  per_change: number;
}

@Component({
  selector: 'app-commoditiy',
  templateUrl: './commoditiy.component.html',
  styleUrls: ['./commoditiy.component.css']
})
export class CommoditiyComponent implements AfterViewInit {
  payload: any;
  loading: boolean = true;

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.http.get<any>('http://localhost:8000/commodities')
      .subscribe({
        next: (res) => {
          this.payload = res.commodities;
          this.loading = false;
          console.log(this.payload)
        },
        error: (err) => {
          console.error('Error fetching commodities data', err);
          this.payload =  [];
          this.loading = false;
        }
      });
  }
}
