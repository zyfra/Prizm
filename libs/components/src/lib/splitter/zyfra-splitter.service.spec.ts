/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ZyfraSplitterService } from './zyfra-splitter.service';

describe('Service: ZyfraSplitter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZyfraSplitterService]
    });
  });

  it('should ...', inject([ZyfraSplitterService], (service: ZyfraSplitterService) => {
    expect(service).toBeTruthy();
  }));
});
