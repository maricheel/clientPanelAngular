import { TestBed } from '@angular/core/testing';

import { AuthClientsService } from './auth-clients.service';

describe('AuthClientsService', () => {
  let service: AuthClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
