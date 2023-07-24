import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizmSwitcherComponent } from './switcher.component';

describe('SwitcherComponent', () => {
  let component: PrizmSwitcherComponent;
  let fixture: ComponentFixture<PrizmSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrizmSwitcherComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
