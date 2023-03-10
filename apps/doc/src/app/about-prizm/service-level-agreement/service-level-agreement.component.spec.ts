import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLevelAgreementComponent } from './service-level-agreement.component';

describe('ServiceLevelAgreementComponent', () => {
  let component: ServiceLevelAgreementComponent;
  let fixture: ComponentFixture<ServiceLevelAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceLevelAgreementComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLevelAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
