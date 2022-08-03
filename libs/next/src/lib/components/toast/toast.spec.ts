import {TestBed} from "@angular/core/testing";
import {ZuiToastContainerComponent, ZuiToastModule, ZuiToastRef, ZuiToastService} from "./index";
import {ToastWrapperComponent} from "./toast-wrapper/toast-wrapper.component";
import {ToastComponent} from "./toast/toast.component";
import {ZuiToastExistException} from "../../exceptions/toast-exist.exception";
import {ZuiToastNotExistException} from "../../exceptions/toast-not-exist.exception";
import {ZuiToastControl} from "./toast-control";
import {By} from "@angular/platform-browser";

describe('doc', () => {
  let toastService: ZuiToastService;
  const ID = 'test-id';

  function createToast(): ZuiToastRef {
    return toastService.create(
      'Hello',
      {
        id: ID,
        appearance: "info",
        timer: 1000
      }
    )
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ZuiToastModule
      ],
    }).compileComponents();
    toastService = TestBed.inject(ZuiToastService);
  });

  it('should create ZuiToastContainerComponent', () => {
    const fixture = TestBed.createComponent(ZuiToastContainerComponent);
    fixture.nativeElement.d
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create ToastWrapperComponent', () => {
    const fixture = TestBed.createComponent(ToastWrapperComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create toast', () => {
    const control = TestBed.inject(ZuiToastControl) as any;
    jest.spyOn(control, 'open');
    expect(createToast()).toBeInstanceOf(ZuiToastRef);
    expect(control.open).toHaveBeenCalled();
    console.log('doc')
  });

  it('should delete toast by id', () => {
    const control = TestBed.inject(ZuiToastControl) as any;
    jest.spyOn(control, 'close');
    expect(createToast()).toBeInstanceOf(ZuiToastRef);
    expect(toastService.delete(ID)).toBeFalsy();
    expect(control.close).toHaveBeenCalled()
  });

  it('should delete all toast', () => {
    const control = TestBed.inject(ZuiToastControl) as any;
    jest.spyOn(control, 'close');
    expect(createToast()).toBeInstanceOf(ZuiToastRef);
    expect(toastService.deleteAll()).toBeFalsy();
    expect(control.close).toHaveBeenCalled()
  });

  it('should get error on recreate attempt', () => {
    expect(createToast()).toBeInstanceOf(ZuiToastRef);
    expect(createToast).toThrowError(ZuiToastExistException);
  });

  it('should update toast', () => {
    expect(createToast()).toBeInstanceOf(ZuiToastRef);
    expect(toastService.updateTitle(ID, 'new title')).toBeInstanceOf(ZuiToastRef);
  });

  it('should get error update not exist toast', () => {
    expect(() => toastService.updateTitle(ID, 'new title')).toThrowError(ZuiToastNotExistException);
  });
});
