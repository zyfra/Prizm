import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComponent } from './tabs.component';
import { ZuiDropdownHostModule } from '../dropdowns/dropdown-host/dropdown-host.module';
import { ZuiIconModule } from '../icon/icon.module';

xdescribe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  class ResizeObserver {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public disconnect(): void {}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public observe(): void {}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public unobserve(): void {}
  }

  window.ResizeObserver = ResizeObserver;

  class MutationObserver {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public disconnect(): void {}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public observe(): void {}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public unobserve(): void {}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public takeRecords(): MutationRecord[] {
      return [];
    }
  }

  window.MutationObserver = MutationObserver;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsComponent],
      imports: [ZuiDropdownHostModule, ZuiIconModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
