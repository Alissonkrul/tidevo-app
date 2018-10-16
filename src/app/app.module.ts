import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {Toast} from '@ionic-native/toast';
import {HttpModule} from '@angular/http';


import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPurchasePage} from '../pages/list-purchase/list-purchase';
import {DataServiceProvider} from '../providers/data-service/data-service';
import {PurchaseProvider} from '../providers/purchase/purchase';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {EditPurchasePage} from "../pages/edit-purchase/edit-purchase";
import {AddPurchasePage} from "../pages/add-purchase/add-purchase";
import { GcFunctionsProvider } from '../providers/gc-functions/gc-functions';


const firebaseConfig = {
    apiKey: "AIzaSyDmW53c_GHD5Kj_Fw8zE6oZw22oWoc5bv8",
    authDomain: "tidevo-1dd03.firebaseapp.com",
    databaseURL: "https://tidevo-1dd03.firebaseio.com",
    projectId: "tidevo-1dd03",
    storageBucket: "tidevo-1dd03.appspot.com",
    messagingSenderId: "125946645217"
  }
;



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPurchasePage,
    EditPurchasePage,
    AddPurchasePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPurchasePage,
    EditPurchasePage,
    AddPurchasePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    Toast,
    DataServiceProvider, //Old
    PurchaseProvider,
    GcFunctionsProvider
  ]
})
export class AppModule {
}
