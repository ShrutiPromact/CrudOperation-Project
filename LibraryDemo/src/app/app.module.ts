import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgCrudoperationLibraryModule} from 'projects/ng-crudoperation-library/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgCrudoperationLibraryModule,
    RouterModule.forRoot(
  [
    { path: "", component: NgCrudoperationLibraryModule}
  ]
)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
