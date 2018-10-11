import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditPurchasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-purchase',
  templateUrl: 'edit-purchase.html',
})
export class EditPurchasePage {
  purchase;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.purchase = this.navParams.get('purchase');
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad EditPurchasePage');
  }

}
