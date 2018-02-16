import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevpagePage } from './devpage';

@NgModule({
  declarations: [
    DevpagePage,
  ],
  imports: [
    IonicPageModule.forChild(DevpagePage),
  ],
})
export class DevpagePageModule {}
