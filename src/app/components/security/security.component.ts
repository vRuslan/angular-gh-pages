import { Component, OnDestroy, OnInit} from '@angular/core';
import {ToggleService} from "../../services/toggle.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
})
export class SecurityComponent implements OnInit, OnDestroy {

  subscription!: Subscription;
  isLogged: boolean = false;

  constructor(private readonly toggleService: ToggleService) {
  }

  ngOnInit(): void {
    this.subscription = this.toggleService.toggleChanged$.subscribe((res: boolean) => {
      console.log("app-security", res);
      this.isLogged = res;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
