import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrizmChipsItemComponent } from './chips-item.component';
import { By } from '@angular/platform-browser';
import { PrizmCallFuncModule, PrizmLetModule } from '@prizm-ui/helpers';
import { CommonModule } from '@angular/common';
import { PrizmElementReadyModule } from '../../../directives/element-ready';
import { PrizmHintModule } from '../../../directives/hint/hint.module';
import { PrizmLifecycleModule } from '../../../directives/lifecycle/lifecycle.module';
import { ChangeDetectionStrategy } from '@angular/core';

describe('PrizmChipsItemComponent', () => {
  let component: PrizmChipsItemComponent;
  let fixture: ComponentFixture<PrizmChipsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrizmChipsItemComponent],
      imports: [
        CommonModule,
        PrizmCallFuncModule,
        PrizmLifecycleModule,
        PrizmElementReadyModule,
        PrizmLetModule,
        PrizmHintModule,
      ],
    })
      .overrideComponent(PrizmChipsItemComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmChipsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit removed event when delete icon is clicked and not disabled', () => {
    component.disabled = false;
    fixture.detectChanges();
    const removeSpy = jest.spyOn(component.deleted, 'emit');
    const deleteIcon = fixture.debugElement.query(By.css('.chips-cancel'));

    if (deleteIcon) {
      deleteIcon.nativeElement.click();
      expect(removeSpy).toHaveBeenCalled();
    } else {
      throw new Error('Delete icon not found');
    }
  });

  it('should not emit removed event when delete icon is clicked and disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    const removeSpy = jest.spyOn(component.deleted, 'emit');
    const deleteIcon = fixture.debugElement.query(By.css('.chips-cancel'));

    if (deleteIcon) {
      deleteIcon.nativeElement.click();
      expect(removeSpy).not.toHaveBeenCalled();
    } else {
      throw new Error('Delete icon not found');
    }
  });

  it('should show delete icon when deletable is true', () => {
    component.deletable = true;
    fixture.detectChanges();

    const deleteIcon = fixture.debugElement.query(By.css('.chips-cancel'));
    expect(deleteIcon).toBeTruthy();
  });

  it('should not show delete icon when deletable is false', () => {
    component.deletable = false;
    fixture.detectChanges();
    const deleteIcon = fixture.debugElement.query(By.css('.chips-cancel'));
    expect(deleteIcon).toBeNull();
  });
});
