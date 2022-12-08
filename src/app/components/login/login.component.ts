import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ToggleService} from "../../services/toggle.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  constructor(private readonly toggleService: ToggleService) {
  }

  updateChecked(val: boolean) {
    this.toggleService.toggleComponentOpenedSubject.next(val);
  }
}
