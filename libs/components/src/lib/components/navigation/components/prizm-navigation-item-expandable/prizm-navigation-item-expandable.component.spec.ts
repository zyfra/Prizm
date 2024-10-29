import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { ActiveNavigationItemService } from '../../services/active-navigation-item.service';

import { PrizmNavigationItemExpandableComponent } from './prizm-navigation-item-expandable.component';

describe('PrizmNavigationItemExpandableComponent', () => {
  let component: PrizmNavigationItemExpandableComponent;
  let fixture: ComponentFixture<PrizmNavigationItemExpandableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [PrizmNavigationItemExpandableComponent],
      providers: [
        {
          provide: ActiveNavigationItemService,
          useValue: {
            activeItem$: new BehaviorSubject({}),
            activeItem: {},
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmNavigationItemExpandableComponent);
    component = fixture.componentInstance;

    component.data$.next({
      title: 'test1',
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
