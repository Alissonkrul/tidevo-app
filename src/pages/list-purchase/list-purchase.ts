import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PurchaseProvider} from "../../providers/purchase/purchase";
import {Observable} from "rxjs/Observable";
import {EditPurchasePage} from "../edit-purchase/edit-purchase";

/**
 * Generated class for the ListPurchasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-purchase',
  templateUrl: 'list-purchase.html',
})
export class ListPurchasePage {
  purchases: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private purchaseProvider: PurchaseProvider) {

    console.log('ionViewDidLoad ListPurchasePage');
    //this.purchases = this.purchaseProvider.getAll();
  }

  ionViewDidLoad() {
    this.purchases = this.purchaseProvider.getAll().valueChanges();
  }

  public edit(purchase) {
    this.navCtrl.push(EditPurchasePage, {purchase})
  }

  public remove() {

  }

  public create() {

  }

}
