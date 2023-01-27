import { TestBed } from '@angular/core/testing';
import { PrizmToastContainerComponent, PrizmToastModule, PrizmToastRef, PrizmToastService } from './index';
import { ToastWrapperComponent } from './toast-wrapper/toast-wrapper.component';
import { ToastComponent } from './toast/toast.component';
import { PrizmToastExistException } from '../../exceptions/toast-exist.exception';
import { PrizmToastNotExistException } from '../../exceptions/toast-not-exist.exception';
import { PrizmToastControl } from './toast-control';
import { By } from '@angular/platform-browser';

xdescribe('doc', () => {
  let toastService: PrizmToastService;
  const ID = 'test-id';

  function createToast(): PrizmToastRef {
    return toastService.create('Hello', {
      id: ID,
      appearance: 'info',
      timer: 1000,
    });
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizmToastModule],
    }).compileComponents();
    toastService = TestBed.inject(PrizmToastService);
  });

  it('should create PrizmToastContainerComponent', () => {
    const fixture = TestBed.createComponent(PrizmToastContainerComponent);
    fixture.nativeElement.d;
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create ToastWrapperComponent', () => {
    const fixture = TestBed.createComponent(ToastWrapperComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create toast', () => {
    const control = TestBed.inject(PrizmToastControl) as any;
    jest.spyOn(control, 'open');
    expect(createToast()).toBeInstanceOf(PrizmToastRef);
    expect(control.open).toHaveBeenCalled();
    console.log('doc');
  });

  it('should delete toast by id', () => {
    const control = TestBed.inject(PrizmToastControl) as any;
    jest.spyOn(control, 'close');
    expect(createToast()).toBeInstanceOf(PrizmToastRef);
    expect(toastService.delete(ID)).toBeFalsy();
    expect(control.close).toHaveBeenCalled();
  });

  it('should delete all toast', () => {
    const control = TestBed.inject(PrizmToastControl) as any;
    jest.spyOn(control, 'close');
    expect(createToast()).toBeInstanceOf(PrizmToastRef);
    expect(toastService.deleteAll()).toBeFalsy();
    expect(control.close).toHaveBeenCalled();
  });

  it('should get error on recreate attempt', () => {
    expect(createToast()).toBeInstanceOf(PrizmToastRef);
    expect(createToast).toThrowError(PrizmToastExistException);
  });

  it('should update toast', () => {
    expect(createToast()).toBeInstanceOf(PrizmToastRef);
    expect(toastService.updateTitle(ID, 'new title')).toBeInstanceOf(PrizmToastRef);
  });

  it('should get error update not exist toast', () => {
    expect(() => toastService.updateTitle(ID, 'new title')).toThrowError(PrizmToastNotExistException);
  });
});
