import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PzmShadowModule } from './shadow.module';
import { PzmShadowValue, PzmShadowType, PzmShadowTypeEnum } from './models';

@Component({
  template: `<div #element [pzmShadow]='value'></div>`,
})
class TestShadowComponent {
  @Input() value: PzmShadowType = PzmShadowTypeEnum.miniLeft;
  @ViewChild('element') elementRef: ElementRef<HTMLDivElement>;
}

describe('IndicatorComponent', () => {
  let component: TestShadowComponent;
  let fixture: ComponentFixture<TestShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PzmShadowModule],
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
    component.value = PzmShadowTypeEnum.miniLeft;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PzmShadowValue.miniLeft);
  });

  it('set big-top type shadow', () => {
    component.value = PzmShadowTypeEnum.bigTop;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PzmShadowValue.bigTop);
  });

  it('set mini-top type shadow', () => {
    component.value = PzmShadowTypeEnum.miniTop;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PzmShadowValue.miniTop);
  });

  it('set big-right type shadow', () => {
    component.value = PzmShadowTypeEnum.bigRight;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PzmShadowValue.bigRight);
  });

  it('set mini-right type shadow', () => {
    component.value = PzmShadowTypeEnum.miniRight;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PzmShadowValue.miniRight);
  });

  it('set big-left type shadow', () => {
    component.value = PzmShadowTypeEnum.bigLeft;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PzmShadowValue.bigLeft);
  });

  it('set mini-left type shadow', () => {
    component.value = PzmShadowTypeEnum.miniLeft;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PzmShadowValue.miniLeft);
  });

  it('set big-bottom type shadow', () => {
    component.value = PzmShadowTypeEnum.bigBottom;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PzmShadowValue.bigBottom);
  });

  it('set mini-bottom type shadow', () => {
    component.value = PzmShadowTypeEnum.miniBottom;
    fixture.detectChanges();
    expect(component.elementRef.nativeElement.style.boxShadow).toEqual(PzmShadowValue.miniBottom);
  });
});
