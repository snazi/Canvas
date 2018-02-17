import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodbreakfastPage } from '../foodbreakfast/foodbreakfast';
import { CleanPage } from '../clean/clean';
import { ExtraPage } from '../extra/extra';
import { RequestsPage } from '../requests/requests';


/**
 * Generated class for the RoomservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roomservice',
  templateUrl: 'roomservice.html',
})
export class RoomservicePage {

  foodbreakfastPage = FoodbreakfastPage;
  cleanPage = CleanPage;
  extraPage = ExtraPage;
  requestsPage = RequestsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomservicePage');
  }

}
