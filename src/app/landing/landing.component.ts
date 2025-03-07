import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingPageComponent {
  constructor(private router: Router) {}  // Inject Router

  goToSignup() {
    this.router.navigate(['/signup']);  // Navigate to Sign Up Page
  }
}
