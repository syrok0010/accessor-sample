import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {CustomFormInnerComponent} from './custom-form-inner.component';

@Component({
  selector: 'app-custom-form',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomFormComponent),
      multi: true,
    },
  ],
  template: `
    <app-custom-form-inner [formControl]="control"></app-custom-form-inner>
  `,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CustomFormInnerComponent
  ]
})
export class CustomFormComponent implements ControlValueAccessor {
  control = new FormControl();
  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }
  public onTouched: () => void = () => {};
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }

  writeValue(obj: any): void {
    obj && this.control.patchValue(obj, { emitEvent: false })
  }
}
