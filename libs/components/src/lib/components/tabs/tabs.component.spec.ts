import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizmTabsComponent } from './tabs.component';
import { PrizmDropdownHostModule } from '../dropdowns/dropdown-host/dropdown-host.module';
import { PrizmIconModule } from '../icon/icon.module';

xdescribe('TabsComponent', () => {
  let component: PrizmTabsComponent;
  let fixture: ComponentFixture<PrizmTabsComponent>;

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
      declarations: [PrizmTabsComponent],
      imports: [PrizmDropdownHostModule, PrizmIconModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
