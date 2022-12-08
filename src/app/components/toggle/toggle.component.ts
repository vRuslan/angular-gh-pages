import {Component, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent {
  isChecked: boolean = false;

  @Output()
  checked: EventEmitter<boolean> = new EventEmitter<boolean>();


  updateChecked() {
    this.isChecked = !this.isChecked;
    console.log("ToggleComponent", this.isChecked);
    this.checked.emit(this.isChecked);

  }
}
