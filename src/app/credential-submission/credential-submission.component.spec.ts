import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialSubmissionComponent } from './credential-submission.component';

describe('CredentialSubmissionComponent', () => {
  let component: CredentialSubmissionComponent;
  let fixture: ComponentFixture<CredentialSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CredentialSubmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredentialSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
