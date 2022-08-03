import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZuiCardComponent } from './card.component';

describe('ZuiCardComponent', () => {
  let component: ZuiCardComponent;
  let fixture: ComponentFixture<ZuiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZuiCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZuiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
