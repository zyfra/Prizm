import { TestBed } from '@angular/core/testing';
import { PzmOverlayControl } from '../../../modules/overlay';
import { PzmDialogModule, PzmDialogService } from './index';
import { first, take } from 'rxjs/operators';

xdescribe('PzmDialog', () => {
  let service: PzmDialogService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PzmDialogModule],
    });
    service = TestBed.inject(PzmDialogService);
  });

  it('create and close', async () => {
    let c: PzmOverlayControl;
    const result = service.open('Hello', {}, ({control, dialog}) => {
      c = control;
      dialog.completeWith(true);
    })

    const r = await result.toPromise();

    expect(r).toBeTruthy();
    expect(c.isOpen).toBeFalsy();
  });

  it('pass data and not close', async () => {
    let c: PzmOverlayControl;
    const result = service.open(null, {}, async ({control, dialog}) => {
      c = control;
      dialog.$implicit.next(true);
      const r = await result.pipe(first()).toPromise();
      expect(r).toBeTruthy();
      expect(c.isOpen).toBeTruthy();
    })

  });

  it('pass header and close', async () => {
    let c: PzmOverlayControl;
    const h = 'Our Header';
    const result = service.open('Hello', {
      header: h
    }, ({control, dialog}) => {
      c = control;
      dialog.completeWith(dialog.header);
    })

    const r = await result.pipe(take(1)).toPromise();

    expect(r).toBe(h);
    expect(c.isOpen).toBeFalsy();
  });

  it('pass content and close', async () => {
    let c: PzmOverlayControl;
    const content = 'Our content';
    const result = service.open(content, {}, ({control, dialog}) => {
      c = control;
      dialog.completeWith(dialog.content);
    })

    const r = await result.pipe(take(1)).toPromise();

    expect(r).toBe(content);
    expect(c.isOpen).toBeFalsy();
  });

  it('close after unsubscribe', async () => {
    const content = 'Our content';
    const result = service.open(content, {}, ({control}) => {
      const s = result.subscribe();
      s.unsubscribe();
      expect(control.isOpen).toBeFalsy();
    });
  });

})
