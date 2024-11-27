/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { PrizmDestroyService } from './destroy.service';

describe('Service: Destroy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrizmDestroyService],
    });
  });

  it('should ...', inject([PrizmDestroyService], (service: PrizmDestroyService) => {
    expect(service).toBeTruthy();
  }));
});
