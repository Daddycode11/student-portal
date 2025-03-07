import { Component } from '@angular/core';

@Component({
  selector: 'app-credential-submission',
  templateUrl: './credential-submission.component.html',
  styleUrls: ['./credential-submission.component.css'],
  standalone: true, // <-- Mark as standalone
})
export class CredentialSubmissionComponent {
  submitCredentials() {
    console.log('Credentials submitted');
    // Your submission logic (e.g., API calls)
  }
}
