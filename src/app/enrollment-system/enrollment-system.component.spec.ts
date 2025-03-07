import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentSystemComponent } from './enrollment-system.component';

describe('EnrollmentSystemComponent', () => {
  let component: EnrollmentSystemComponent;
  let fixture: ComponentFixture<EnrollmentSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollmentSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
