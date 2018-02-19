import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CalendarModule } from "ion2-calendar";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ScanPage} from '../pages/scan/scan';
import {NewhomePage} from '../pages/newhome/newhome';
import { PassportPage } from '../pages/passport/passport';
import { LicensePage } from '../pages/license/license';
import { SelfiePage } from '../pages/selfie/selfie';
import { DetailsPage } from '../pages/details/details';
import { PaymentPage } from '../pages/payment/payment';
import { FinishPage } from '../pages/finish/finish';
import {DevpagePage} from '../pages/devpage/devpage';
import {BookingsPage} from '../pages/bookings/bookings';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { PinPage } from '../pages/pin/pin';
import { RoomservicePage } from '../pages/roomservice/roomservice';
import {CalendarPage} from '../pages/calendar/calendar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScanPage,
    NewhomePage,
    PassportPage,
    LicensePage,
    SelfiePage,
    DevpagePage,
    BookingsPage,
    DetailsPage,
    PaymentPage,
    FinishPage,
    QrcodePage,
    PinPage,
    RoomservicePage,
    CalendarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp , {  scrollPadding: false,
            scrollAssist: true,
            autoFocusAssist: false}),
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScanPage,
    NewhomePage,
    PassportPage,
    LicensePage,
    SelfiePage,
    DevpagePage,
    BookingsPage,
    DetailsPage,
    PaymentPage,
    FinishPage,
    QrcodePage,
    PinPage,
    RoomservicePage,
    CalendarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
