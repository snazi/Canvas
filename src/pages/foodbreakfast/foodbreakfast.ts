import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodsaladPage } from '../foodsalad/foodsalad';

/**
 * Generated class for the FoodbreakfastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foodbreakfast',
  templateUrl: 'foodbreakfast.html',
})
export class FoodbreakfastPage {

  foodsaladPage = FoodsaladPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodbreakfastPage');
  }

}
