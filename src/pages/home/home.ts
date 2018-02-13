import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ScanPage} from '../scan/scan';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	scanPage = ScanPage;


  constructor(public navCtrl: NavController) {

  }

}
