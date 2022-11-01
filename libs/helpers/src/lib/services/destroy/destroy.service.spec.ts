/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PzmDestroyService } from './destroy.service';

describe('Service: Destroy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PzmDestroyService]
    });
  });

  it('should ...', inject([PzmDestroyService], (service: PzmDestroyService) => {
    expect(service).toBeTruthy();
  }));
});
