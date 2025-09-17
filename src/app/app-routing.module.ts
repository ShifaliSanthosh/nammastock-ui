import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { CommoditiyComponent } from './commoditiy/commoditiy.component';
import { IpoComponent } from './ipo/ipo.component';
import { UsaComponent } from './usa/usa.component';

const routes: Routes = [

  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
  },
  { 
    path: 'commoditiy', 
    component: CommoditiyComponent,
  },
  { 
    path: 'ipo', 
    component: IpoComponent,
  },
  { 
    path: 'usa', 
    component: UsaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

