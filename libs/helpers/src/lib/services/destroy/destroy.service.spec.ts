/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ZuiDestroyService } from './destroy.service';

describe('Service: Destroy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZuiDestroyService]
    });
  });

  it('should ...', inject([ZuiDestroyService], (service: ZuiDestroyService) => {
    expect(service).toBeTruthy();
  }));
});
