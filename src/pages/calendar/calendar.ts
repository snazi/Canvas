import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarComponentOptions } from 'ion2-calendar';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {


	dateRange: { from: string; to: string; };
  	type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  	optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
 
 	 };

 	 


  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }
 	
 	onSelectStart($event) {
  		console.log($event);
 	 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

 	

}
