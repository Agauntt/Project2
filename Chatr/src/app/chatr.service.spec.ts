import { TestBed } from '@angular/core/testing';

import { ChatrService } from './chatr.service';

describe('ChatrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatrService = TestBed.get(ChatrService);
    expect(service).toBeTruthy();
  });
});
