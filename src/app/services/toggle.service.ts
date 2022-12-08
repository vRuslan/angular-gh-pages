import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  toggleComponentOpenedSubject = new Subject<boolean>();
  toggleChanged$ = this.toggleComponentOpenedSubject.asObservable();
}
