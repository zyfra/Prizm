import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ZuiShadowModule } from './shadow.module';
import { ZuiShadowValue, ZuiShadowType, ZuiShadowTypeEnum } from './models';

@Component({
  template: `<div #element [zuiShadow]='value'></div>`,
})
class TestShadowComponent {
  @Input() value: ZuiShadowType = ZuiShadowTypeEnum.miniLeft;
  @ViewChild('element') elementRef: ElementRef<HTMLDivElement>;
}

describe('IndicatorComponent', () => {
  let component: TestShadowComponent;
  let fixture: ComponentFixture<TestShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZuiShadowModule],
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
    component.value = ZuiShadowTypeEnum.miniLeft;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(ZuiShadowValue.miniLeft);
  });

  it('set big-top type shadow', () => {
    component.value = ZuiShadowTypeEnum.bigTop;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(ZuiShadowValue.bigTop);
  });

  it('set mini-top type shadow', () => {
    component.value = ZuiShadowTypeEnum.miniTop;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(ZuiShadowValue.miniTop);
  });

  it('set big-right type shadow', () => {
    component.value = ZuiShadowTypeEnum.bigRight;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(ZuiShadowValue.bigRight);
  });

  it('set mini-right type shadow', () => {
    component.value = ZuiShadowTypeEnum.miniRight;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(ZuiShadowValue.miniRight);
  });

  it('set big-left type shadow', () => {
    component.value = ZuiShadowTypeEnum.bigLeft;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(ZuiShadowValue.bigLeft);
  });

  it('set mini-left type shadow', () => {
    component.value = ZuiShadowTypeEnum.miniLeft;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(ZuiShadowValue.miniLeft);
  });

  it('set big-bottom type shadow', () => {
    component.value = ZuiShadowTypeEnum.bigBottom;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(ZuiShadowValue.bigBottom);
  });

  it('set mini-bottom type shadow', () => {
    component.value = ZuiShadowTypeEnum.miniBottom;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(ZuiShadowValue.miniBottom);
  });
});
