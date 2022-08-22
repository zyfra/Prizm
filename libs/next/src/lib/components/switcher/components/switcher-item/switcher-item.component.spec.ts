import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitcherItemComponent } from './switcher-item.component';

describe('SwitcherItemComponent', () => {
  let component: SwitcherItemComponent;
  let fixture: ComponentFixture<SwitcherItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitcherItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitcherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
