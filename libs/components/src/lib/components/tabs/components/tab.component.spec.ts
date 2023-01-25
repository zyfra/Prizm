import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrizmTabsService } from '../tabs.service';

import { PrizmTabComponent } from './tab.component';

describe('PagesComponent', () => {
  let component: PrizmTabComponent;
  let fixture: ComponentFixture<PrizmTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrizmTabComponent],
      providers: [
        {
          provide: PrizmTabsService,
          useValue: {
            getTabByIdx: jest.fn(),
            addTab: jest.fn(),
            removeTab: jest.fn(),
            isActiveTab: jest.fn(),
            selectTab: jest.fn(),
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
