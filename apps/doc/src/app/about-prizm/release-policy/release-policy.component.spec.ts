import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasePolicyComponent } from './release-policy.component';

describe('ReleasePolicyComponent', () => {
  let component: ReleasePolicyComponent;
  let fixture: ComponentFixture<ReleasePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReleasePolicyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
