import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabComponent } from './tab.component';

describe('PagesComponent', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when current page was canceled', () => {
    let result = false;

    component.cancelClick.subscribe(() => (result = true));
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    component.cancel({ stopPropagation: (): void => {} } as MouseEvent);

    expect(result).toBeTruthy();
  });

  it('should emit when new page was chosen', () => {
    let result = false;

    component.tabClick.subscribe(() => (result = true));
    component.tabChoose();

    expect(result).toBeTruthy();
  });
});
