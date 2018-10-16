import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PurchaseProvider} from "../../providers/purchase/purchase";
import {Observable} from "rxjs/Observable";
import {EditPurchasePage} from "../edit-purchase/edit-purchase";
import {AddPurchasePage} from "../add-purchase/add-purchase";

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
    this.purchases = this.purchaseProvider.getAll2();
  }

  ionViewDidLoad() {
    this.purchases.subscribe((t) => {
      console.log(t);
    })
  }

  public edit(purchase) {
    this.navCtrl.push(EditPurchasePage, {purchase})
  }

  public add() {
    this.navCtrl.push(AddPurchasePage);
  }

  public remove(purchase) {
    this.purchaseProvider.remove(purchase.id).then(() => {
      //this.ionViewDidLoad();
    });

  }

  public create() {

  }

}
