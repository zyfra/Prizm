import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZuiCheckboxComponent } from './zui-checkbox.component';

describe('ZuiCheckboxComponent', () => {
  let component: ZuiCheckboxComponent;
  let fixture: ComponentFixture<ZuiCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZuiCheckboxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZuiCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
