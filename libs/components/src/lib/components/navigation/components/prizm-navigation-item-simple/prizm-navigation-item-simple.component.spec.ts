import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizmNavigationItemSimpleComponent } from './prizm-navigation-item-simple.component';

describe('PrizmNavigationItemSimpleComponent', () => {
  let component: PrizmNavigationItemSimpleComponent;
  let fixture: ComponentFixture<PrizmNavigationItemSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrizmNavigationItemSimpleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmNavigationItemSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
