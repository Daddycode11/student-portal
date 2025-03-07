// src/app/login/login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true, 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    console.log('Login attempt:', this.username, this.password);
    // Logic to check credentials goes here (e.g., call to backend API)
  }
}
