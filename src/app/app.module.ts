import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SecurityComponent } from './components/security/security.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import {ItemsService} from "./services/items.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LoginComponent,
    ProfileComponent,
    ScheduleComponent,
    SecurityComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
