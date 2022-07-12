import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule as TranslateModuleZyfra } from '@digital-plant/zyfra-translate';
import { HttpClientModule } from '@angular/common/http';
import { ZyfraButtonModule } from '@digital-plant/zyfra-components';
import { TranslateComponent } from './translate.component';

describe('TranslateComponent', () => {
  let component: TranslateComponent;
  let fixture: ComponentFixture<TranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TranslateComponent],
      imports: [TranslateModuleZyfra.forRoot(), HttpClientModule, ZyfraButtonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
