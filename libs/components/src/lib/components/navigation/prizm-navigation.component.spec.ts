import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizmNavigationComponent } from './prizm-navigation.component';

describe('PrizmNavigationComponent', () => {
  let component: PrizmNavigationComponent;
  let fixture: ComponentFixture<PrizmNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrizmNavigationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
