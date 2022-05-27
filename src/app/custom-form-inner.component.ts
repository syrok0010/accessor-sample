import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-custom-form-inner',
  template: `
    <input type="text" [formControl]="control">
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomFormInnerComponent),
      multi: true,
    },
  ],
  standalone: true,
  imports: [
    ReactiveFormsModule
  ]
})
export class CustomFormInnerComponent implements ControlValueAccessor {
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
