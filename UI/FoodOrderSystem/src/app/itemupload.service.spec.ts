import { TestBed, inject } from '@angular/core/testing';

import { ItemuploadService } from './itemupload.service';

describe('ItemuploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemuploadService]
    });
  });

  it('should be created', inject([ItemuploadService], (service: ItemuploadService) => {
    expect(service).toBeTruthy();
  }));
});
