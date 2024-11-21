import { TestBed } from '@angular/core/testing';

import { HaburguerService } from './haburguer.service';

describe('HaburguerService', () => {
  let service: HaburguerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HaburguerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
