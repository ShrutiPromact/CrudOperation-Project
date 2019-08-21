import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCrudoperationLibraryComponent } from './ng-crudoperation-library.component';

describe('NgCrudoperationLibraryComponent', () => {
  let component: NgCrudoperationLibraryComponent;
  let fixture: ComponentFixture<NgCrudoperationLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCrudoperationLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCrudoperationLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
