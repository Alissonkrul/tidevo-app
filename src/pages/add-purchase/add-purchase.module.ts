import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPurchasePage } from './add-purchase';

@NgModule({
  declarations: [
    AddPurchasePage,
  ],
  imports: [
    IonicPageModule.forChild(AddPurchasePage),
  ],
})
export class AddPurchasePageModule {}
