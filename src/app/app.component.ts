import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  template: `
    <app-custom-form [formControl]="control"></app-custom-form>
  `,
})
export class AppComponent {
  control = new FormControl();
}
