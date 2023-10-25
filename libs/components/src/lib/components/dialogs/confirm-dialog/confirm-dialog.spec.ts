import { TestBed } from '@angular/core/testing';
import { PrizmOverlayControl } from '../../../modules/overlay';
import {
  PrizmConfirmDialogModule,
  PrizmConfirmDialogResultDefaultType,
  PrizmConfirmDialogService,
} from './index';
import { first, take } from 'rxjs/operators';

xdescribe('PrizmConfirmDialog', () => {
  let service: PrizmConfirmDialogService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PrizmConfirmDialogModule],
    });
    service = TestBed.inject(PrizmConfirmDialogService);
  });

  it('create and close', async () => {
    let c: PrizmOverlayControl;
    const result = service.open('Hello', {}, ({ control, dialog }) => {
      c = control;
      dialog.completeWith(true);
    });

    const r = await result.toPromise();

    expect(r).toBeTruthy();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(c.isOpen).toBeFalsy();
  });

  it('pass data and not close', async () => {
    let c: PrizmOverlayControl;
    const result = service.open(null as unknown, {}, async ({ control, dialog }) => {
      c = control;
      dialog.$implicit.next(true);
      const r = await result.pipe(first()).toPromise();
      expect(r).toBeTruthy();
      expect(c.isOpen).toBeTruthy();
    });
  });

  it('pass description and close', async () => {
    let c: PrizmOverlayControl;
    const h = 'Our Description';
    const result = service.open(
      'Hello',
      {
        description: h,
      },
      ({ control, dialog }) => {
        c = control;
        dialog.completeWith(dialog.description);
      }
    );

    const r = await result.pipe(take(1)).toPromise();

    expect(r).toBe(h);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(c.isOpen).toBeFalsy();
  });

  it('pass confirmed and close', async () => {
    let c: PrizmOverlayControl;
    const content = PrizmConfirmDialogResultDefaultType.confirmed;
    const result = service.open(content, {}, ({ control, dialog }) => {
      c = control;
      dialog.completeWith(PrizmConfirmDialogResultDefaultType.confirmed);
    });

    const r = await result.pipe(take(1)).toPromise();

    expect(r).toBe(content);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(c?.isOpen).toBeFalsy();
  });

  it('close after unsubscribe', async () => {
    const content = 'Our content';
    const result = service.open(content, {}, ({ control }) => {
      const s = result.subscribe();
      s.unsubscribe();
      expect(control.isOpen).toBeFalsy();
    });
  });
});
