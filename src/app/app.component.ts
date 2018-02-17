import { Component,ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {NewhomePage} from '../pages/newhome/newhome';
import {DevpagePage} from '../pages/devpage/devpage';
import {BookingsPage} from '../pages/bookings/bookings'
import { QrcodePage } from '../pages/qrcode/qrcode';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages: Array<{title: string, component: any, imgSource: string}> ;


   constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'Home', component: NewhomePage, imgSource: 'assets/imgs/home.png'},
      { title: 'Bookings', component: BookingsPage, imgSource: 'assets/imgs/bookings.png'},
      { title: 'Test Dev Page', component: DevpagePage, imgSource: 'assets/imgs/bookings.png' },
      { title: 'QR Code', component: QrcodePage, imgSource: 'assets/imgs/QRCode.png' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
