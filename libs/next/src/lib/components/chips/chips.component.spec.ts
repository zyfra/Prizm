import { ZuiChipsComponent } from './chips.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

xdescribe('InputChipsControlComponent', () => {
  let component: ZuiChipsComponent;
  let fixture: ComponentFixture<ZuiChipsComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZuiChipsComponent);
    component = fixture.componentInstance;
  });

  it('should set value in chipsList', () => {
    component.chips = ['chip1', 'chip2'];
    expect(component.chipsList.length).toBe(2);
  });

  it('default disabled value should be falsy', () => {
    expect(component.accessorIsDisabled).toBeFalsy();
  });

  it('should write value in chipsList', () => {
    component.writeValue(['chip1', 'chip2', 'chip3']);
    expect(component.chipsList.length).toBe(3);
  });

  it('should add chip', () => {
    const newChipName = 'new chip';
    component.addChips(newChipName);
    expect(component.chipsList).toContain(newChipName);
  });

  it('should remove chip by idx', () => {
    const chipIdx = 1;
    const chips = ['chip1', 'chip2', 'chip3'];
    const chipName = chips[chipIdx];

    component.chips = chips;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    component.removeChips({ stopPropagation: (): void => {} } as MouseEvent, chipIdx);
    expect(component.chipsList.find(item => item === chipName)).toBeFalsy();
  });
});

