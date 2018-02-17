import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodsaladPage } from './foodsalad';

@NgModule({
  declarations: [
    FoodsaladPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodsaladPage),
  ],
})
export class FoodsaladPageModule {}
