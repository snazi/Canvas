import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookings',
  templateUrl: 'bookings.html',
})
export class BookingsPage {

	booked: Array<{roomType: string, otherDetails: string, bookedDate: string}> ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.booked = [
      { roomType: 'Delux Room', otherDetails: '2kids', bookedDate: 'Feb 12-14, 2018'},
      { roomType: 'Premium Room', otherDetails: '2 adults', bookedDate: 'Feb 12-18, 2018'},
      { roomType: 'DEVELOPER Room', otherDetails: '2 AMAZING DEVS', bookedDate: 'Feb 12-29, 2018'}  
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingsPage');
  }

}
