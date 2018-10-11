import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPurchasePage } from './list-purchase';

@NgModule({
  declarations: [
    ListPurchasePage
  ],
  imports: [
    IonicPageModule.forChild(ListPurchasePage)
  ],
})

export class ListPurchasePageModule {}
