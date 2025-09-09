import { AfterViewInit, Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  showSignup = false;
  signup = { email: '', password: '' };
  payload:any;
 topGainers: any[] = [];
 topLossers:any[]=[];
 
 news=[];
  toggleSignup() {
    this.showSignup = !this.showSignup;
  }
 constructor(private http: HttpClient) {}
  onSignup() {
    alert(`Signed up with email: ${this.signup.email}`);
  }

  ngAfterViewInit(): void {
  const ctx = document.getElementById('equityChart') as HTMLCanvasElement;

  this.http.get<any>('http://localhost:8000/dashboard')
    .subscribe((res) => {
      this.payload = res;
      this.topGainers = this.payload.top_gainers;
      this.topLossers = this.payload.top_losers;
      this.news = this.payload.news;

      // 👇 closing index data
      const indexValues = this.payload[0].values; // [['2024-09-09','24936.40'], ...]
      const dmaValues = this.payload[1].values;   // [['2025-01-31','23680.07'], ...]

      // Downsample data (take every 5th point so chart is visible)
      const sampledIndex = indexValues.filter((_:any, i:number) => i % 5 === 0);
      const sampledDMA = dmaValues.filter((_:any, i:number) => i % 5 === 0);

      // Prepare labels (dates) and datasets
      const labels = sampledIndex.map((d:any) => d[0]); // only dates

      const indexData = sampledIndex.map((d:any) => parseFloat(d[1]));
      const dmaData   = sampledDMA.map((d:any) => parseFloat(d[1]));

      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Index',
                data: indexData,
                borderColor: '#667eea',
                backgroundColor: 'rgba(102,126,234,0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.3,
                pointRadius: 0
              },
              {
                label: '50 DMA',
                data: dmaData,
                borderColor: '#f56565',
                backgroundColor: 'rgba(245,101,101,0.1)',
                borderWidth: 2,
                fill: false,
                tension: 0.3,
                pointRadius: 0
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { position: 'top' }
            },
            scales: {
              x: { ticks: { maxRotation: 45, minRotation: 45 } }
            }
          }
        });
      }
    });
}

}
