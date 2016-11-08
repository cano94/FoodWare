import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { LoginPage } from '../pages/login-page/login-page';
import { FirmsPage } from '../pages/firms/firms';
export var MyApp = (function () {
    function MyApp(platform, alertCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        platform.ready().then(function () {
            StatusBar.styleDefault();
            platform.registerBackButtonAction(function () {
                console.log('back button pressed');
                if (_this.nav.canGoBack() == false) {
                    console.log("Handling back button on a home page");
                    _this.alertCtrl.create({
                        title: 'Dikkat!!',
                        message: 'Uygulamadan çıkmayı onaylıyor musunuz?',
                        buttons: [
                            {
                                text: 'İptal et',
                                handler: function () {
                                }
                            },
                            {
                                text: 'Onayla',
                                handler: function () {
                                    platform.exitApp();
                                }
                            }
                        ]
                    }).present();
                }
                else {
                    _this.nav.setRoot(FirmsPage);
                }
            }, 101);
        });
        this.checkPreviousAuthorization();
    }
    MyApp.prototype.checkPreviousAuthorization = function () {
        if ((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) &&
            (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
            this.rootPage = LoginPage;
        }
        else {
            this.rootPage = FirmsPage;
        }
    };
    MyApp.decorators = [
        { type: Component, args: [{
                    template: "<ion-nav [root]=\"rootPage\"></ion-nav>"
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
        { type: AlertController, },
    ];
    MyApp.propDecorators = {
        'nav': [{ type: ViewChild, args: [Nav,] },],
    };
    return MyApp;
}());
