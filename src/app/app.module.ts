import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

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
import { FoodbreakfastPage } from '../pages/foodbreakfast/foodbreakfast';
import { FoodsaladPage } from '../pages/foodsalad/foodsalad';
import { CleanPage } from '../pages/clean/clean';
import { ExtraPage } from '../pages/extra/extra';
import { RequestsPage } from '../pages/requests/requests';
import { AmenitiesPage } from '../pages/amenities/amenities';
import { MessagelistPage } from '../pages/messagelist/messagelist';
import { MessagePage } from '../pages/message/message';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ProfilePage } from '../pages/profile/profile';

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
    FoodbreakfastPage,
    FoodsaladPage,
    CleanPage,
    ExtraPage,
    RequestsPage,
    AmenitiesPage,
    MessagelistPage,
    MessagePage,
    NotificationsPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp , {  scrollPadding: false,
            scrollAssist: true,
            autoFocusAssist: false})
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
    FoodbreakfastPage,
    FoodsaladPage,
    CleanPage,
    ExtraPage,
    RequestsPage,
    AmenitiesPage,
    MessagelistPage,
    MessagePage,
    NotificationsPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
