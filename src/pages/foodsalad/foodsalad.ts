import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodbreakfastPage } from '../foodbreakfast/foodbreakfast';

/**
 * Generated class for the FoodsaladPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foodsalad',
  templateUrl: 'foodsalad.html',
})
export class FoodsaladPage {

  foodbreakfastPage = FoodbreakfastPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodsaladPage');
  }

}
