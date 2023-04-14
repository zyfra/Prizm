import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrizmChipsItemComponent } from './chips-item.component';
import { By } from '@angular/platform-browser';

describe('PrizmChipsItemComponent', () => {
  let component: PrizmChipsItemComponent;
  let fixture: ComponentFixture<PrizmChipsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrizmChipsItemComponent],
    }).compileComponents();
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
    const removeSpy = spyOn(component.deleted, 'emit');
    const deleteIcon = fixture.debugElement.query(By.css('.delete-icon'));

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
    const removeSpy = spyOn(component.deleted, 'emit');
    const deleteIcon = fixture.debugElement.query(By.css('.delete-icon'));

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

    const deleteIcon = fixture.debugElement.query(By.css('.delete-icon'));
    expect(deleteIcon).toBeTruthy();
  });

  it('should not show delete icon when deletable is false', () => {
    component.deletable = false;
    fixture.detectChanges();

    const deleteIcon = fixture.debugElement.query(By.css('.delete-icon'));
    expect(deleteIcon).toBeNull();
  });
});
