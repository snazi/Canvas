import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodbreakfastPage } from './foodbreakfast';

@NgModule({
  declarations: [
    FoodbreakfastPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodbreakfastPage),
  ],
})
export class FoodbreakfastPageModule {}
