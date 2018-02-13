import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScanPage } from '../scan/scan';
import { SelfiePage } from '../selfie/selfie';

/**
 * Generated class for the LicensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-license',
  templateUrl: 'license.html',
})
export class LicensePage {

  scanPage = ScanPage;
  selfiePage = SelfiePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LicensePage');
  }

}
