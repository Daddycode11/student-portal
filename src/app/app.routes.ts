// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CredentialSubmissionComponent } from './credential-submission/credential-submission.component';
import { DashboardComponent } from './dashboard/dashboard.component';  // <-- Import DashboardComponent

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'credential-submission', component: CredentialSubmissionComponent },
  { path: 'dashboard', component: DashboardComponent },  // <-- Add the route for DashboardComponent
  // Other routes...
];
