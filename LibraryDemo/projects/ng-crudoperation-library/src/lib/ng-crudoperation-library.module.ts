import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgCrudoperationLibraryComponent } from './ng-crudoperation-library.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [NgCrudoperationLibraryComponent],
  exports: [NgCrudoperationLibraryComponent]
})
export class NgCrudoperationLibraryModule { }
