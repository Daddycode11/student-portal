import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true, 
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  // Define the signup method
  signup() {
    console.log('Signup clicked', {
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }
}



