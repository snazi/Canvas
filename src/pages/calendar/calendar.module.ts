import { NgModule } from '@angular/core';
import { IonicApp, IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
import { CalendarModule } from "ion2-calendar";

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarPage),
    CalendarModule
  ],
})
export class CalendarPageModule {

}
