import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PrizmToastService } from '@prizm-ui/components';
import { PrizmThemeService } from '@prizm-ui/theme';
import { of } from 'rxjs';
import { PrizmDocHostElementListenerService } from '@prizm-ui/doc';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        { provide: PrizmToastService, useValue: { create: jest.fn() } },
        {
          provide: PrizmThemeService,
          useValue: {
            change$: of({ theme: 'dark ' }),
            getByElement: jest.fn().mockReturnValue('dark'),
            update: jest.fn(),
          },
        },
        {
          provide: PrizmDocHostElementListenerService,
          useValue: {
            event$: of({
              event: '',
              type: '',
              data: {},
              hasNotListener: true,
              key: '',
              page: { header: '' },
            }),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    component.docEl = { night: true, onMode: jest.fn() };
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
