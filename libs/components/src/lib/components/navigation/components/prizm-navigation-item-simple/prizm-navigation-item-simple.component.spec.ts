import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { ActiveNavigationItemService } from '../../services/active-navigation-item.service';

import { PrizmNavigationItemSimpleComponent } from './prizm-navigation-item-simple.component';
import { PrizmNavigationModule } from '@prizm-ui/components';

// for fix ResizeObserver is not defined
global.ResizeObserver = class {
  public observe() {}
  public unobserve() {}
  public disconnect() {}
};

describe('PrizmNavigationItemSimpleComponent', () => {
  let component: PrizmNavigationItemSimpleComponent;
  let fixture: ComponentFixture<PrizmNavigationItemSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizmNavigationModule],
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
      declarations: [PrizmNavigationItemSimpleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmNavigationItemSimpleComponent);
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
