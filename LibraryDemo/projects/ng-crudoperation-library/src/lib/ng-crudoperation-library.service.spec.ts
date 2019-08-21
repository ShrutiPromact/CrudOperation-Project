import { TestBed } from '@angular/core/testing';

import { NgCrudoperationLibraryService } from './ng-crudoperation-library.service';

describe('NgCrudoperationLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgCrudoperationLibraryService = TestBed.get(NgCrudoperationLibraryService);
    expect(service).toBeTruthy();
  });
});
