import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  {CalendarPage} from '../calendar/calendar';


/**
 * Generated class for the NewhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newhome',
  templateUrl: 'newhome.html',
})
export class NewhomePage {

	calendarPage = CalendarPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewhomePage');
  }

}
