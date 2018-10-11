import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {Toast} from '@ionic-native/toast';
import {DataServiceProvider} from '../../providers/data-service/data-service';
import {Observable} from "rxjs/Observable";
import {PurchaseProvider} from "../../providers/purchase/purchase";
import {ListPurchasePage} from "../list-purchase/list-purchase";

//import {ListPurchasePage} from "../list-purchase/list-purchase";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products: any[] = [];
  selectedProduct: any;
  productFound: boolean = false;
  purchases: Observable<any>;

  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              private toast: Toast,
              public dataService: DataServiceProvider,
              private purchaseProvider: PurchaseProvider) {

  }
  ionViewDidLoad() {
    //this.purchases =  this.purchaseProvider.getAll().valueChanges();
  }

  public openPurchaseList(){
    this.navCtrl.push(ListPurchasePage);
  }

  scan() {
    this.selectedProduct = {};
    this.barcodeScanner.scan().then((barcodeData) => {

      this.toast.show(`This is the fucking url bitch: ${JSON.stringify(barcodeData)}`, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );


    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }

}
