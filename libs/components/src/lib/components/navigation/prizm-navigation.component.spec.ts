import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { PrizmNavigationComponent } from './prizm-navigation.component';
import { ActiveNavigationItemService } from './services/active-navigation-item.service';

describe('PrizmNavigationComponent', () => {
  let component: PrizmNavigationComponent;
  let fixture: ComponentFixture<PrizmNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ActiveNavigationItemService,
          useValue: {
            activeItem$: new BehaviorSubject({}),
            activeItem: {},
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
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
