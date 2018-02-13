import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ScanPage} from '../pages/scan/scan';
import {NewhomePage} from '../pages/newhome/newhome';
import {DevpagePage} from '../pages/devpage/devpage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScanPage,
    NewhomePage,
    DevpagePage
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
    DevpagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
