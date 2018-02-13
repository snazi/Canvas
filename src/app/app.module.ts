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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScanPage,
    NewhomePage,
    PassportPage,
    LicensePage,
    SelfiePage
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
    SelfiePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
