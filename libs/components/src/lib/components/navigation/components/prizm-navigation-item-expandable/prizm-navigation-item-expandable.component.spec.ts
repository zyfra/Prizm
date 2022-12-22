import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizmNavigationItemExpandableComponent } from './prizm-navigation-item-expandable.component';

describe('PrizmNavigationItemExpandableComponent', () => {
  let component: PrizmNavigationItemExpandableComponent;
  let fixture: ComponentFixture<PrizmNavigationItemExpandableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrizmNavigationItemExpandableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmNavigationItemExpandableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
