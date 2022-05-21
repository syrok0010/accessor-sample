import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CustomFormComponent} from "./custom-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomFormInnerComponent} from "./custom-form-inner.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CustomFormComponent,
    ReactiveFormsModule,
    FormsModule,
    CustomFormInnerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
