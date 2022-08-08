import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZuiCardComponent } from './card.component';
import { CommonModule } from '@angular/common';

describe('ZuiCardComponent', () => {
  let component: ZuiCardComponent;
  let fixture: ComponentFixture<ZuiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CommonModule ],
      declarations: [ ZuiCardComponent ],
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
