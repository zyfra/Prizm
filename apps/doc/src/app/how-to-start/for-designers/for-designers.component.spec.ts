import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDesignersComponent } from './for-designers.component';

describe('ForDesignersComponent', () => {
  let component: ForDesignersComponent;
  let fixture: ComponentFixture<ForDesignersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForDesignersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForDesignersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
