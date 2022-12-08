import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
