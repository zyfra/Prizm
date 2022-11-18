import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PrizmShadowModule } from './shadow.module';
import { PrizmShadowValue, PrizmShadowType, PrizmShadowTypeEnum } from './models';

@Component({
  template: `<div #element [prizmShadow]='value'></div>`,
})
class TestShadowComponent {
  @Input() value: PrizmShadowType = PrizmShadowTypeEnum.miniLeft;
  @ViewChild('element') elementRef: ElementRef<HTMLDivElement>;
}

describe('IndicatorComponent', () => {
  let component: TestShadowComponent;
  let fixture: ComponentFixture<TestShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizmShadowModule],
      declarations: [TestShadowComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('set mini-left type shadow', () => {
    component.value = PrizmShadowTypeEnum.miniLeft;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PrizmShadowValue.miniLeft);
  });

  it('set big-top type shadow', () => {
    component.value = PrizmShadowTypeEnum.bigTop;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PrizmShadowValue.bigTop);
  });

  it('set mini-top type shadow', () => {
    component.value = PrizmShadowTypeEnum.miniTop;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PrizmShadowValue.miniTop);
  });

  it('set big-right type shadow', () => {
    component.value = PrizmShadowTypeEnum.bigRight;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PrizmShadowValue.bigRight);
  });

  it('set mini-right type shadow', () => {
    component.value = PrizmShadowTypeEnum.miniRight;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PrizmShadowValue.miniRight);
  });

  it('set big-left type shadow', () => {
    component.value = PrizmShadowTypeEnum.bigLeft;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PrizmShadowValue.bigLeft);
  });

  it('set mini-left type shadow', () => {
    component.value = PrizmShadowTypeEnum.miniLeft;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PrizmShadowValue.miniLeft);
  });

  it('set big-bottom type shadow', () => {
    component.value = PrizmShadowTypeEnum.bigBottom;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PrizmShadowValue.bigBottom);
  });

  it('set mini-bottom type shadow', () => {
    component.value = PrizmShadowTypeEnum.miniBottom;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PrizmShadowValue.miniBottom);
  });
});
