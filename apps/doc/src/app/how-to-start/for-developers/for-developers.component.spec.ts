import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDevelopersComponent } from './for-developers.component';

describe('ForDevelopersComponent', () => {
  let component: ForDevelopersComponent;
  let fixture: ComponentFixture<ForDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForDevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
