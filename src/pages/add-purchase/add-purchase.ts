import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {Toast} from '@ionic-native/toast';
import {GcFunctionsProvider} from "../../providers/gc-functions/gc-functions";
import {ListPurchasePage} from "../list-purchase/list-purchase";

/**
 * Generated class for the AddPurchasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-purchase',
  templateUrl: 'add-purchase.html',
})
export class AddPurchasePage {
  top = 'top';

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private toastProvider: Toast, private gcFunctionProvider: GcFunctionsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPurchasePage');
  }

  scan() {


    this.barcodeScanner.scan()
      .then((barcodeData) => {
        this.top = JSON.stringify(barcodeData);
        this.toastProvider.show(barcodeData.text, '1', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
        return this.gcFunctionProvider.createPurchaseWithQrCodeUrl(barcodeData.text, 'TEST_TIDEVO_ID').subscribe((msg) => {
          this.toastProvider.show(JSON.stringify(msg), '5000', 'center').subscribe(
            toast => {
              console.log(toast);
              //this.navCtrl.push(ListPurchasePage);
            }
          );
        })
      }).catch((err) => {
      this.toastProvider.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    })
  }

}
