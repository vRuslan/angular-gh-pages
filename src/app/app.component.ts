import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ItemsService} from "./services/items.service";
import {ITodo} from "./models/ITodo";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  items!: Observable<ITodo[]>;

  constructor(private itemsService: ItemsService) {
  }

  ngOnInit(): void {
    this.items = this.itemsService.getItems();
  }

  trackByMethod(index: number, el: ITodo): number {
    return el.id!;
  }
}
