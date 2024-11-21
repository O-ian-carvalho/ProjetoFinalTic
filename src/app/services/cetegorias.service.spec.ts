import { TestBed } from '@angular/core/testing';

import { CetegoriasService } from './cetegorias.service';

describe('CetegoriasService', () => {
  let service: CetegoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CetegoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
