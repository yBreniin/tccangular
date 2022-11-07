import { TestBed } from '@angular/core/testing';

import { CarrinhoapiService } from './carrinhoapi.service';

describe('CarrinhoapiService', () => {
  let service: CarrinhoapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrinhoapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
