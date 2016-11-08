import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,AlertController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { LoginPage } from '../pages/login-page/login-page';
import { FirmsPage } from '../pages/firms/firms';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;

  constructor(platform: Platform, private alertCtrl: AlertController) {

    platform.ready().then(() => {
      StatusBar.styleDefault();

      platform.registerBackButtonAction(() => {
        console.log('back button pressed');
    
        if (this.nav.canGoBack() == false) {
          console.log("Handling back button on a home page");
               this.alertCtrl.create({
                  title: 'Dikkat!!',
                  message: 'Uygulamadan çıkmayı onaylıyor musunuz?',
                  buttons: [
                     {
                        text: 'İptal et',
                        handler: () => {
                        }
                     },
                     {
                        text: 'Onayla',
                        handler: () => {
                           platform.exitApp();
                        }
                     }
                  ]
               }).present();
            } else {
          this.nav.setRoot(FirmsPage);
        }
      }, 101);
    });
    this.checkPreviousAuthorization();
  }

  checkPreviousAuthorization(): void {
    if ((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) &&
      (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
      this.rootPage = LoginPage;
    } else {
      this.rootPage = FirmsPage;
    }
  }
}