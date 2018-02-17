import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { ScanPage } from '../scan/scan';


/**
 * Generated class for the SelfiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selfie',
  templateUrl: 'selfie.html',
})
export class SelfiePage {

  detailsPage = DetailsPage;
  scanPage = ScanPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelfiePage');
  }

}
