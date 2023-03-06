import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryRequirementsComponent } from './library-requirements.component';

describe('LibraryRequirementsComponent', () => {
  let component: LibraryRequirementsComponent;
  let fixture: ComponentFixture<LibraryRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibraryRequirementsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
