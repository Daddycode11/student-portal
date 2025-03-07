// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CredentialSubmissionComponent } from './credential-submission/credential-submission.component';
import { DashboardComponent } from './dashboard/dashboard.component';  // <-- Import DashboardComponent


export const routes: Routes = [
  { path: '', component: LandingPageComponent },  // Landing Page
  { path: 'signup', component: SignupComponent }, // Sign Up Page
  { path : 'login', component: LoginComponent } // Login Page
];

