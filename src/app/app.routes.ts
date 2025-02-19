import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { authGardGuard } from './Services/auth-gard.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: "register", component: RegisterComponent },
    // dashboard is authenticated route
    { path: 'dashboard', component: DashboardComponent, canActivate: [authGardGuard] },
    // { path: 'dashboard', component: DashboardComponent },
    { path: "logout", redirectTo: "/login" },
    { path: '**', redirectTo: '/login' },

];
