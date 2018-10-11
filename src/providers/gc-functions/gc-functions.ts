import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GcFunctionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GcFunctionsProvider {
  PATH = "https://us-central1-tidevo-1dd03.cloudfunctions.net/";

  constructor(public http: Http) {
    console.log('Hello GcFunctionsProvider Provider');
  }

  public createPurchaseWithQrCodeUrl(url: string, tidevoId: string) {
    return this.http.post(`${this.PATH}purchases/`, {url, tidevoId});
  }

}
