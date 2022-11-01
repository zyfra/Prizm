import {TestBed} from "@angular/core/testing";
import {PzmToastContainerComponent, PzmToastModule, PzmToastRef, PzmToastService} from "./index";
import {ToastWrapperComponent} from "./toast-wrapper/toast-wrapper.component";
import {ToastComponent} from "./toast/toast.component";
import {PzmToastExistException} from "../../exceptions/toast-exist.exception";
import {PzmToastNotExistException} from "../../exceptions/toast-not-exist.exception";
import {PzmToastControl} from "./toast-control";
import {By} from "@angular/platform-browser";

xdescribe('doc', () => {
  let toastService: PzmToastService;
  const ID = 'test-id';

  function createToast(): PzmToastRef {
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
        PzmToastModule
      ],
    }).compileComponents();
    toastService = TestBed.inject(PzmToastService);
  });

  it('should create PzmToastContainerComponent', () => {
    const fixture = TestBed.createComponent(PzmToastContainerComponent);
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
    const control = TestBed.inject(PzmToastControl) as any;
    jest.spyOn(control, 'open');
    expect(createToast()).toBeInstanceOf(PzmToastRef);
    expect(control.open).toHaveBeenCalled();
    console.log('doc')
  });

  it('should delete toast by id', () => {
    const control = TestBed.inject(PzmToastControl) as any;
    jest.spyOn(control, 'close');
    expect(createToast()).toBeInstanceOf(PzmToastRef);
    expect(toastService.delete(ID)).toBeFalsy();
    expect(control.close).toHaveBeenCalled()
  });

  it('should delete all toast', () => {
    const control = TestBed.inject(PzmToastControl) as any;
    jest.spyOn(control, 'close');
    expect(createToast()).toBeInstanceOf(PzmToastRef);
    expect(toastService.deleteAll()).toBeFalsy();
    expect(control.close).toHaveBeenCalled()
  });

  it('should get error on recreate attempt', () => {
    expect(createToast()).toBeInstanceOf(PzmToastRef);
    expect(createToast).toThrowError(PzmToastExistException);
  });

  it('should update toast', () => {
    expect(createToast()).toBeInstanceOf(PzmToastRef);
    expect(toastService.updateTitle(ID, 'new title')).toBeInstanceOf(PzmToastRef);
  });

  it('should get error update not exist toast', () => {
    expect(() => toastService.updateTitle(ID, 'new title')).toThrowError(PzmToastNotExistException);
  });
});
