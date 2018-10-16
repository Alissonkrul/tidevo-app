import {Injectable} from '@angular/core';
import {Observable} from 'rxjs-compat';
import {map} from 'rxjs-compat/operators/map';

import {
  AngularFirestore
} from "angularfire2/firestore";
import {AngularFirestoreCollection} from "@angular/fire/firestore";

/*
  Generated class for the PurchaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PurchaseProvider {
  private PATH = 'purchases';

  constructor(private db: AngularFirestore) {
  }

  getAll(): AngularFirestoreCollection<any> {
    return this.db.collection(this.PATH);
  }

  remove(purchaseId) {
    return this.db.doc(`${this.PATH}/${purchaseId}`).delete();
  }

  edit(id, purchase) {
    return this.db.doc(`${this.PATH}/${id}`).update(purchase)
  }

  get(id) {
    return this.db.doc(`${this.PATH}/${id}`).get()
  }

  getAll2() {
    return this.db.collection(this.PATH).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        let id = a.payload.doc.id;
        return {id, ...data};
      });
    });
  }
}

