import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizmPanelComponent } from './panel.component';

describe('PanelComponent', () => {
  let component: PrizmPanelComponent;
  let fixture: ComponentFixture<PrizmPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrizmPanelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when back btn is clicked', () => {
    let result = false;

    component.backClick.subscribe(() => (result = true));
    component.back();

    expect(result).toBeTruthy();
  });
});
