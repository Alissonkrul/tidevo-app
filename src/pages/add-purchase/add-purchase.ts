import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
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
  private purchase = {url: '', place: "", items: [{name: "", value: 0}]};

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private toastProvider: Toast, private gcFunctionProvider: GcFunctionsProvider, public loadingController: LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPurchasePage');
  }

  public addItem() {
    this.purchase.items.push(
      {
        name: "",
        value: 0
      }
    );
    this.purchase.items.sort();

  }

  scan() {
    let loader = this.loadingController.create({
      content: "Criando Purchase"
    });

    this.barcodeScanner.scan()
      .then((barcodeData) => {
        this.purchase.url = JSON.stringify(barcodeData);
        loader.present();
        return this.gcFunctionProvider.createPurchaseWithQrCodeUrl(barcodeData.text, 'TEST_TIDEVO_ID')
          .subscribe((msg) => {
            loader.dismiss();
            this.toastProvider.show("Produto cadastrado com sucesso", '3000', 'center')
              .subscribe(
                toast => {
                  this.navCtrl.setRoot(ListPurchasePage);
                }
              );
          }, (err) => {
            throw err;
          })
      }).catch((err) => {
      loader.dismiss();
      this.toastProvider.show("Ops, algo deu errado :(, ERR: " + (err.code || 500), '5000', 'center').subscribe(
        toast => {
          console.log(err);
        }
      );
    })
  }

}
